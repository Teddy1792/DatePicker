import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

/**
 * Represents the structure of an option for the select component.
 */
export interface OptionType {
  value: string | number;
  label: string;
}

/**
 * Props for the CustomSelect component.
 */
export interface CustomSelectProps {
  items: OptionType[];
  style?: object;
  initialDefaultValue?: string | number;
  onChange?: (selectedOption: OptionType | null) => void;
  value?: OptionType | null;
}

/**
 * CustomSelect is a React functional component that renders a select dropdown.
 * It allows users to choose from a list of options provided in 'items'.
 *
 * @param {CustomSelectProps} props - Props for the CustomSelect component.
 * @returns {React.ReactElement} - The rendered custom select component.
 */
const CustomSelect: React.FC<CustomSelectProps> = ({ items, style, initialDefaultValue, onChange, value }) => {
  // Finds the initial default value in the items list.
  const findInitialValue = () => {
    return items.find(item => item.value === initialDefaultValue) || null;
  };

  const [defaultValue, setDefaultValue] = useState<OptionType | null>(findInitialValue());

  useEffect(() => {
    setDefaultValue(findInitialValue());
  }, [initialDefaultValue, items]);

  // Custom styles for the select component
  const customStyles: StylesConfig<OptionType, false> = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      width: '110px',
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: '220px',
      overflowY: 'auto',
    }),
    ...style,
  };

  // Handles the change of the select value.
  const handleChange = (selectedOption: OptionType | null) => {
    onChange?.(selectedOption);
  };

  return (
    <div>
      <Select
        className="custom-select"
        options={items}
        styles={customStyles}
        value={items.find((item) => item.value === (value ? value.value : defaultValue))}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomSelect;
