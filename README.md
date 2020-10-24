# Dining Concierge #

## About ##

This project is a part of the course - Cloud Computing and Applications (CS-GY 9223) at Tandon School of Engineering,  New York University developed by Akansha Priya and Ayushi Gupta.

## FRONTEND ##

The frontend of this project has been hosted using AWS S3 and provides a user interface to interact with the chatbot. The frontend code uses javascript, jquery, html and css primarily, for development purposes and has been taken from an open source template available at https://github.com/ndrppnc/cloud-hw1-starter.

## BACKEND ##

This application uses API Gateway to call lambda functions written for the various functionalities of the chatbot using Python 2.7. The bot was primarily developed and tested using Amazon Lex, and then published. The API Gateway was created by using Swagger, and a template available at https://github.com/001000001/aics-columbia-s2018/blob/master/aics-swagger.yaml was followed to implement the same. This application also makes use of DynamoDB and Elastic Search to store data fetched from the yelp restaurants api. Once the matches to the user requirements are found, notifications are sent via SMS and Email using Amazon SNS and SQS.

