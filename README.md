# DatePickerFromScratch

================ EN ====================

The datepickerfromscratch is a custom date picker built for React applications using TypeScript. It's designed to offer a seamless, accessible, and customizable date-picking experience for form inputs.

## Features

- **React & TypeScript**: Fully implemented in React with TypeScript for type safety and scalability.
- **Customizable Styles**: Utilizes SCSS for easy styling adjustments.
- **Accessibility Focused**: Built with accessibility in mind to ensure usability for all users.
- **Environment**: Developed in a Vite environment with support for HMR and ESLint rules.

## Installation

Install via npm:
                `npm i datepickerfromscratch`

## Dependencies

- **React & ReactDOM**: Core frameworks for building the component. Ensure your project uses React 18.2.0 or higher, along with ReactDOM for rendering components in the web browser.
- **React-Select**: A flexible and customizable select input component for React. Used to enhance the select inputs in the date picker for better user experience. It's essential for rendering custom select elements in the component.
- **TypeScript**: Used for type safety and scalability in development. Your project should include TypeScript to leverage these benefits.
- **@fortawesome/fontawesome-svg-core, fortawesome/free-solid-svg-icons, fortawesome/react-fontawesome**: These Font Awesome packages provide icons used within the date picker for visual elements.
- **Sass**: Used for styling the component. Your project should be able to compile SCSS files.

Note: While react and react-dom are peer dependencies, they must be present in your project for the component to work.

## Usage

Import the DatePicker component into your React application and integrate it as a regular form input component. You can access the GitHub repository here:
- https://github.com/Teddy1792/DatePicker.git

## Props table

| Name                    | Type       | Required | Description                                 |
|-------------------------|------------|----------|---------------------------------------------|
| `id`--------------------| `string` --| Yes -----| Unique identifier for the date picker. -----|
| `selectedDate`----------| `Date` ----| No ------| The currently selected date. ---------------|
| `onChange` -------------| `function` | Yes -----| Callback function when the date is changed. |
| `onFormInputChange`-----| `function` | No ------| Callback when the form input changes. ------|
| ........................| ...........| .........| ............................................|


## Contributing

Contributions to improve datepickerfromscratch are welcome. Please follow the standard pull request process on the GitHub repository.

## License

This project is licensed under the MIT License.