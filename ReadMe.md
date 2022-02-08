# Start Server Application

    created a backend application which provided two endpoint which modifies and collects data

## install packages creating the node modules with the following command

    `npm install`

## Available Scripts

### run the application in development mode with
    `npm  start`

### run the application in test mode with
    `npm run test`

### look at the application test converage
    `npm run coverage`

## Introduction

This is a Back end application connecting with the mongodb database in the cloud.

The rest Api where created with version base to allow new api routes to be added later on with different request and allowing the applicant to use a stable version of the relise.

## Current Endpoints:

    `[GET] /api/${version}/groups?color={value}`
    `[POST] /api/${version}/groups`

## Assumptions made

Will be making the assumption that you are runnnig frontend and backend locally so we are only  communicating the backend and the front end using 'localhost:3000' and the backend runs on 'localhost:8080'\
.gitignore was to contain configuration but keep it there evaluator to have a database

## Thing to do

Post Test case should be tested with two things in mind the empty state and the state that has an item.\
-- use before and after function in test for create and remove the inserted item to have a stable test case and prevent applicaiton from consuming data\

Would benifit from something to prevent multiple requestes from coming in at a giving time to backend\
