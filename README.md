## Interview Scheduler

- Development focuses on a single page application (SPA), built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.

## Final Product

!["main view"](https://github.com/OlgaShilenkova/scheduler/blob/master/docs/main-view.png?raw=true)

!["book appointment"](https://github.com/OlgaShilenkova/scheduler/blob/master/docs/book-appointment.png?raw=true)

!["edit or cancel appointment"](https://github.com/OlgaShilenkova/scheduler/blob/master/docs/edit-or-cancel-appointment.png?raw=true)

!["re-ask befor deletion"](https://github.com/OlgaShilenkova/scheduler/blob/master/docs/reask-befor-deletion.png?raw=true)

## Technical Specifications

- React
- Webpack,Babel
- Axios
- Storybook, Webpack Dev Server, Jest,Testing Library

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
