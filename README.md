# 101373306 Lab Test 2 - SpaceX Missions Explorer

This Angular application displays information about SpaceX launches using the SpaceX REST API.

## Features

- View a list of all SpaceX launches
- Filter launches by year
- View detailed information about a specific mission
- Links to external resources (articles, Wikipedia, videos)

## Technologies Used

- Angular 19.2
- Angular Material UI
- RxJS
- SpaceX API

## API Endpoints Used

- SpaceX Launches API: `https://api.spacexdata.com/v3/launches`
- SpaceX Launch Filter API: `https://api.spacexdata.com/v3/launches?launch_year=<year>`
- SpaceX Mission Details API: `https://api.spacexdata.com/v3/launches/<id>`

## Project Structure

- **Components**
  - `MissionList`: Displays a list of all SpaceX launches
  - `MissionFilter`: Allows filtering missions by launch year
  - `MissionDetails`: Shows detailed information about a selected mission
  
- **Services**
  - `SpacexService`: Handles API calls to the SpaceX API
  
- **Models**
  - `Launch`: Interface defining the structure of SpaceX launch data

## Setup and Running

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository
2. Install dependencies
```
npm install
```

### Running the Application

```
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

### Building for Production

```
ng build
```

## Deployment

The application is deployed on [Deployment Platform URL].

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
