import React from "react";
import Select from "react-select";
import "./select.scss";
export const DropDown =({onStateChange,data,isLoading,placeholder})=> {
  const [selectedOption, setSelectedOption] = React.useState('TT');
  const handleChange = (selectedItem) => {
    setSelectedOption(selectedItem);
    onStateChange(selectedItem);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  return (
    <div className="select">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={data}
        placeholder={"Select " + placeholder}
        isLoading={isLoading} styles={customStyles}
      />
    </div>
  );
}
