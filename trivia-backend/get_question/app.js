// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10', region: process.env.AWS_REGION});

exports.handler = async event => {
  const params = {
    TableName: process.env.TABLE_NAME,
    /* Item properties will depend on your application concerns */
    Key: {
      questionId: event.pathParameters['questionId']
    }
  }

  let question = null;
    try {
      question = await ddb.get(params).promise()
    } catch (err) {
        return {statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err)};
    }

    return {statusCode: 200, body: JSON.stringify(question)};
};
