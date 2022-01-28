**Interview Scheduler**

- Development focuses on a single page application (SPA), built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.

**Final Product**

!["screenshot description"](#)

!["screenshot description"](#)

**Technical Specifications**

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
