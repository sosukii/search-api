import { FC, useState, ChangeEvent } from 'react';

interface Props {
  defaultValue: number;
  options: number[];
  onSelect: (value: number) => void;
}

export const Dropdown: FC<Props> = ({ defaultValue, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select value={selectedValue} onChange={handleSelect}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
