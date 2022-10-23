# Task Manager

## Available Scripts

Remember you need to run **both the backend and frontend**.
In the project directory, you can run:

- `npm start` - Runs the app in the development mode.
- `npm run json` - Starts the json server. Required for the app to load.
- `npm test` - Launches the test runner in the interactive watch mode.

## Notes

Decided to use _json-server_ as a quick way of having some working API that could look like what you defined on that swagger. It allows pagination and could expand to create tasks, just decided there was no need to demonstrate that part as I'm already reading and updating.

RTK Query is used to simplify the process API calls + redux, as it will handle it on its own.

Context would be useful for handling the auth state globally, but decided to skip that part as I have already spent quite some time getting the routes ready on the json-server side and the pagination.
