# datepickerfromscratch

A custom date picker component for React applications, built with Vite and TypeScript.

## Installation

Install the package using npm:

```
  npm i datepickerfromscratch
```

## Usage

Import the DatePicker component and its stylesheet in your React application:

```
  import { useState } from 'react';
  import { DatePicker } from 'datepickerfromscratch';
  import 'datepickerfromscratch/style.css';
```

Then, in the same folder than the file where you call the component DatePicker, create a file named datepickerfromscratch.d.ts containing:
```
declare module 'datepickerfromscratch';
```
And you are set!


Example usage in a component:

```
  function App() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return (
      <DatePicker
        id="my-datepicker"
        selectedDate={selectedDate}
        onChange={handleDateChange}
      />
    );
  }

  export default App;
```

Set the selectedDate state to control the date picker and use the onChange handler to receive the selected date.

## Props

| Name           | Type       | Required | Description                                 |
|----------------|------------|----------|---------------------------------------------|
| `id`           | `string`   | Yes      | Unique identifier for the date picker.      |
| `selectedDate` | `Date`     | No       | The currently selected date.                |
| `onChange`     | `function` | Yes      | Callback function when the date is changed. |
| .............. | .......... | ........ | ........................................... |


## Dependencies

This component does not require any additional dependencies to be installed by the library user.