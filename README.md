# Form Generator

This project is a [Create React App](https://github.com/facebook/create-react-app) that represents a form generator processing a JSON input structure to create an interactive form.

## Tech stack

- [React](https://react.dev/learn)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Hook Form](https://react-hook-form.com/docs)
- [Material UI](https://mui.com/material-ui/getting-started/)

## Features

- Form Generation
  - Input: passing a JSON structure defines the form layout.If the JSON changes, the form re-renders accordingly.
  - Supported field types:
    - text
    - textarea
    - dropdown
    - checkbox
    - radio
  - Output: the generated form.

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn`

Installs the dependencies.

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Example JSON Inputs

### Basic

```json
{
  "fields": [
    {
      "type": "text",
      "label": "Name",
      "placeholder": "Enter your name"
    },
    {
      "type": "checkbox",
      "label": "Agree to Terms"
    },
    {
      "type": "radio",
      "label": "Choose One",
      "options": [
        { "label": "Yes", "value": "yes" },
        { "label": "No", "value": "no" }
      ]
    }
  ]
}
```
