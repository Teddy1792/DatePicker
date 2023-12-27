import React, { useState } from 'react';
import './App.css';
import DatePicker from './component/DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Handle the change (e.g., form state update)
  };

  const handleFormInputChange = (fieldName, value) => {
    // Handle form input change
  };

  return (
    <>
      <DatePicker 
        id="my-datepicker"
        selectedDate={selectedDate}
        onChange={handleDateChange}
        onFormInputChange={handleFormInputChange}
      />
    </>
  );
}

export default App;
