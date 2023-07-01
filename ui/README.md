# This is the React frontend



## Installation Guide

- install nodejs version >=14
- `npm install`
  - You can use `npm ci` for clean installs after package updates, but should use `npm install` for the first build as it will check you are runnning at least Node 14

## Available Scripts

| NPM script | Description                                      |
|------------|--------------------------------------------------|
| build      | Builds app                                       |
| start      | Starts production version of the app             |
| lint       | checks for syntax and eslint errors in code      |
| test       | Runs jest tests in ci                            |
| test:watch | Runs jest tests and watches for changes          |
| test:clean | Clears cache and runs jest tests                 |
| web        | Creates webpack build against prod.config.js     |

These are main scripts available, there are other helper scripts in [package.json](package.json) file

## Pages and Endpoints

Home Page: `http://localhost:3000/`