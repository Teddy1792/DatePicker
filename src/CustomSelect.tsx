import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

/**
 * Represents an option in the custom select component.
 *
 * @typedef {Object} OptionType
 * @property {string | number} value - The value of the option.
 * @property {string} label - The label displayed for the option.
 */
interface OptionType {
  value: string | number;
  label: string;
}

/**
 * Props for the CustomSelect component.
 *
 * @typedef {Object} CustomSelectProps
 * @property {OptionType[]} items - An array of options to display in the select.
 * @property {object} [style] - Additional custom styles for the select component.
 * @property {string | number} [initialDefaultValue] - The initial default value for the select.
 * @property {(selectedOption: OptionType | null) => void} [onChange] - A function to be called when the selected option changes.
 * @property {OptionType | null} [value] - The currently selected option.
 */
interface CustomSelectProps {
  items: { value: string | number; label: string }[];
  style?: object;
  initialDefaultValue?: string | number; // Adjusted to string or number
  onChange?: (selectedOption: { value: string | number; label: string } | null) => void;
  value?: { value: string | number; label: string } | null;
}

/**
 * Custom select component for displaying and selecting options.
 *
 * @param {CustomSelectProps} props - The component's props.
 * @returns {JSX.Element} The CustomSelect component.
 */
const CustomSelect: React.FC<CustomSelectProps> = ({ items, style, initialDefaultValue, onChange, value }) => {

  /**
   * Finds the initial default value from the items array.
   *
   * @returns {OptionType | null} The initial default value.
   */
  const findInitialValue = () => {
    return items.find(item => item.value === initialDefaultValue) || null;
  };

  const [defaultValue, setDefaultValue] = useState<{ value: string | number; label: string } | null>(findInitialValue());

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

  /**
   * Handles the selection change in the custom select.
   *
   * @param {OptionType | null} selectedOption - The selected option.
   */
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
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
