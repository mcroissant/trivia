import axios from "axios";

const questionApiBaseUrl = import.meta.env.VITE_JS_QUESTION_API_BASE_URL;

export const getQuestions = async () => {
    return axios.get(questionApiBaseUrl+'questions/')
}

export const addQuestion = async(question) => {
    return axios.post(questionApiBaseUrl+'questions/', question)
}