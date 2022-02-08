# Start Server Application

    created a backend application which provided two endpoint which modifies and collects data

## install packages creating the node modules with the following command

    `npm install`

## Available Scripts

### run the application in development mode with
    `npm run dev`

### run the application in test mode with
    `npm run test`

### build package
    `npm run build`

## Introduction

This is a Back end application connecting with the mongodb database in the cloud.

The rest Api where created with version base to allow new api routes to be added later on with different request and allowing the applicant to use a stable version of the relise.

## Current Endpoints:

    `[GET] /api/${version}/groups?color={value}`
    `[POST] /api/${version}/groups`

## Assumptions made

Will be making the assumption that you are runnnig frontend and backend locally so we are only  communicating the backend and the front end using 'localhost:3000' and the backend runs on 'localhost:8080'