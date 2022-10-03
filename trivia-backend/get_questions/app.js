// Copyright 2018-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10', region: process.env.AWS_REGION});

const params = {
  TableName: process.env.TABLE_NAME
}


exports.handler = async event => {
  let question = null;
    try {
      questions = await ddb.scan(params).promise()
    } catch (err) {
        return {statusCode: 500, body: 'Failed to connect: ' + JSON.stringify(err)};
    }

    return {statusCode: 200, body: JSON.stringify(questions)};
};
