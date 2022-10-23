# Task Manager

## Available Scripts

Remember you need to run **both the backend and frontend**.
In the project directory, you can run:

- `npm start` - Runs the app in the development mode.
- `npm run json` - Starts the json server. Required for the app to load.
- `npm test` - Launches the test runner in the interactive watch mode.

## Test notes

Decided to use _json-server_ as a quick way of having some working API that could look like what you defined on that swagger. It allows pagination and could expand to create tasks, just decided there was no need to demonstrate that part as I'm already reading and updating.

RTK Query is used to simplify the process API calls + redux, as it will handle it on its own.

Context would be useful for handling the auth state globally, but decided to skip that part as I have already spent quite some time getting the routes ready on the json-server side and the pagination.

## Technical test

Context: our back-end server team is building new microservices that will implement a task
management system.

Using React (and any other technology you deem necessary), create a front end (i.e. one or
multiple pages) that uses the RESTful API described in the yaml file.

The solution should provide a suitable foundation for other developers to enhance and
improve upon in the near and distant future.

## Bonus points

Demonstration of the following items could earn extra bonus points (optional):

- Redux store
- Linter
- Pagination
- Context API

### Notes

The backend API may not be ready when the frontend task is implemented, mocked data
could be used in this case.

It is left to the candidate to decide how to display the front end. OpenID authentication
specification in the OpenAPI definition document is out of scope for the frontend task.

We suggest that you host your application in AWS or Azure and use GitHub for source
control as you will be required to demonstrate your solution and talk through the code which
you’ve implemented.

If you believe it is necessary you are invited to enhance your solution by implementing
additional functionalities which you feel would be useful for a company such as Airbox
Systems.

Once you have completed this brief please notify either the recruiter or myself confirming the
public IP address of your application.
