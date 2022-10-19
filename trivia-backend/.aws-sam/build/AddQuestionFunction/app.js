// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: process.env.AWS_REGION });

exports.handler = async event => {
  if (event.body == null) {
    return { statusCode: 400, body: 'No body' };
  }
  let body = JSON.parse(event.body);
  const putParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      questionId: AWS.util.uuid.v4(),
      question: body.question,
      answers: body.answers,
      correctAnswer: body.correctAnswer,
      duration: body.duration,
    }
  };

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body:'',
  };

  try {
    let data = await ddb.put(putParams).promise();
    response.statusCode = 200
    response.body = JSON.stringify(data)
  } catch (err) {
    response.statusCode = 500
    response.body = 'Failed to connect: ' + JSON.stringify(err)
  }

  return response;
};
