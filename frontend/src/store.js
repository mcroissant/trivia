import {reactive} from 'vue';
import {shuffle} from './helpers';
import {getQuestions} from './services/question-api';
import axios from "axios";

const questionApiBaseUrl = import.meta.env.VITE_JS_QUESTION_API_BASE_URL;
const realTimeApiUrl = import.meta.env.VITE_JS_REALTIME_WSS;

export const store = reactive({
    score: 0,
    questionCount: 0,
    quizEnded: false,
    data: null,
    options: null,
    loading: true,
    checkingAnswer: false,
    currentQuestion: 0,
    step: 0,
    showAnswer: false,
    correctAnswer: null,
    providedAnswer: null,
    success: false,
    failure: false,
    newMessage: null,
    connection:null,
    questions: [],
    question: null,
    incrementScore() {
        this.score++;
    },
    createConnection(){
        console.log("Starting connection to WebSocket Server")
        this.connection = new WebSocket(realTimeApiUrl)

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }
    },
    getData() {
        this.loading = true;

        if(this.connection == null){
            this.createConnection();
        }
        this.connection.onmessage = function (event) {
            var res = JSON.parse(event.data)
            console.log("recieved message : "+ res)
            console.log(res)
            if (res.message_type === 0) {
                res.results.map((item) => {
                    item.shuffled_answers = shuffle([
                        ...item.answers,
                    ]);
                    delete item.answers;
                });
                store.data = res;
                store.currentQuestion = 0;
                store.showAnswer = false;
                store.questionCount = store.data.results.length;
                store.loading = false;
                store.answer = null;
                store.providedAnswer= null;

                store.step = 1;
                store.loading = false;
            } else if (res.message_type === 1) {
                store.correctAnswer = res.answer;
                store.checkAnswer()
                store.loading = false;
            }
        }
    },
    submitAnswer(answer) {
        store.checkingAnswer = true;
        store.loading = true;
        this.providedAnswer = answer;
    },
    checkAnswer() {
        if (this.correctAnswer === this.providedAnswer) {
            this.incrementScore();
            this.showAnswer = true;
            this.checkingAnswer = false;
            this.step = 3;
            this.success = true;
            this.failure = false;
            return;
        }
        this.showAnswer = true;
        this.checkingAnswer = false;
        this.success = false;
        this.failure = true;
        this.step = 3;
    },

    startQuiz() {
        this.step = 1;
    },

    sendNewMessage(){
        this.connection.send(this.newMessage);
        this.newMessage = null;
    },
    getQuestions(){
        getQuestions().then(response => (store.questions = response.data.Items))
    },
    addQuestion(question){
        axios
            .post(questionApiBaseUrl+'questions/', question)
            .then(response => this.getQuestions())
    },
    sendQuestion(index){
        store.question = store.questions[index]
        let data = JSON.stringify({"action":"sendmessage", "data":JSON.stringify({"message_type":0,"results":[{"question":store.questions[index].question,"answers":store.questions[index].answers}]})})
        this.connection.send(data);

    },
    sendAnswer(answer){
        let data = JSON.stringify( {"action":"sendmessage", "data":JSON.stringify({"message_type":1,"answer":answer})})
        this.connection.send(data);
        store.question = null;
    }
});
