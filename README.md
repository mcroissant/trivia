# Trivia Go

A simple quiz web-app built with Vue.js and Tailwind CSS.

You can view the live version in the following link: [trivia-go.netlify.app](https://trivia-go.netlify.app/)

<p align="center">
  <img alt="Light" src="https://i.ibb.co/bLD3TwS/Screen-Shot-2022-07-11-at-9-56-24-PM.png" width="75%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="https://i.ibb.co/6n5mYBp/Screen-Shot-2022-07-11-at-10-00-53-PM.png" width="20%">
</p>

## Installation

To run the project simply install the dependencies using: `npm install` and then run:

```
npm run dev
```


## Websocket connection

```
wscat -c wss://oi2emnutnh.execute-api.us-east-1.amazonaws.com/Prod
```

## Websocket Message 

```
{"action":"sendmessage", "data":"{\"message_type\":0,\"results\":[{\"category\":\"General Knowledge\",\"type\":\"multiple\",\"difficulty\":\"medium\",\"question\":\"Who is a co-founder of music streaming service Spotify?\",\"answers\":[\"Sean Parker\",\"Felix Miller\",\"Michael Breidenbruecker\"]}]}" }
```

```
{"action":"sendmessage", "data":"{\"message_type\":1,\"answer\": \"Sean Parker\"}"}
```
