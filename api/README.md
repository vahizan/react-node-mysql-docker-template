# This is the Nodejs Backend

## Installation Guide

- install nodejs version >=14
- `npm install`
  - You can use `npm ci` for clean installs after package updates, but should use `npm install` for the first build as it will check you are runnning at least Node 14

## Available Scripts

| NPM script | Description                                                              |
|------------|--------------------------------------------------------------------------|
| start      | Starts production version of the app                                     |
| build      | Builds app for production                                                |
| dev        | Starts app in development - detects and updates changes made in the code |


These are main scripts available, there are other helper scripts in [package.json](package.json) file

## Endpoints

Root Endpoint: `http://localhost:8080/`