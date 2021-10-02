import React from "react";
import Select from "react-select";
import "./select.scss";
export const DropDown =({onStateChange,data,isLoading,placeholder})=> {
  const [selectedOption, setSelectedOption] = React.useState('TT');
  const handleChange = (selectedItem) => {
    setSelectedOption(selectedItem);
    onStateChange(selectedItem);
  };
  return (
    <div className="select">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={data}
        placeholder={"Select " + placeholder}
        isLoading={isLoading}
      />
    </div>
  );
}
