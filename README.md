# React Hangman Node Server

This project is live on (https://hmreact.herokuapp.com/). The first load may take time as heroku server dyno goes in sleep mode if not accessed for 30 minutes.

## Running project in development mode

### Pre-requisites:

1. node version `14.x`
2. yarn version `1.22.x`
3. MongoDb version `5.x` (Optional, as by default the app will use a publicly hosted MongoDb server. Required if you need to setup a local database.)

### Steps:
In the project directory:

1. Make the `.env` file by duplicating `.env.example`

2. Run `yarn`. To install all dependencies.

3. Run`yarn test`. This launches the test runner in the interactive watch mode. Please stop the development server (`yarn start`) before running tests to avoid a busy port issue.

4. Run `yarn start`. This will run the app in the development mode. Open (http://localhost:8000) to view it in the browser.
(Note: If your node environment PORT is set, then the application will open on that port [http://localhost:YOUR_NODE_ENV_PORT])

### To test using local mongodb database.

1. In the `env` file, change `REMOTE_DB` to `false`.

2. Restart the app server.
