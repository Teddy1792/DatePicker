import { useState } from 'react';
import './App.css';
import DatePicker from './component/DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // Additional logic for when the date changes
  };

  const handleFormInputChange = () => {
    // Handle form input change. This function might be a placeholder if not used.
  };

  return (
    <div className="App">
      <DatePicker 
        id="my-datepicker"
        selectedDate={selectedDate}
        onChange={handleDateChange}
        onFormInputChange={handleFormInputChange} // Providing this prop as required by DatePickerProps
      />
    </div>
  );
}

export default App;
