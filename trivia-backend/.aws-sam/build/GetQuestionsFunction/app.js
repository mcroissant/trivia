// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10', region: process.env.AWS_REGION});

const params = {
  TableName: process.env.TABLE_NAME
}


exports.handler = async event => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body:'',
  };
  let question = null;
    try {
      questions = await ddb.scan(params).promise()
      response.body = JSON.stringify(questions)
    } catch (err) {
        return {statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err)};
    }

    return response;
};
