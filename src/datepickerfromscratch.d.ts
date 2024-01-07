declare module 'datepickerfromscratch' {
    export interface DatePickerProps {
      id: string;
      selectedDate: Date | null;
      onChange: (date: Date | null) => void;
      onFormInputChange: (fieldName: string, value: string) => void;
    }
  
    const DatePicker: React.FC<DatePickerProps>;
  
    export default DatePicker;
  }
  