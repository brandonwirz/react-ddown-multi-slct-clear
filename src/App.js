import Select from "react-select";
import React, { useState } from "react";
import { colorOptions } from "./data";
import "./styles.css";

export default function Multi() {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const handleChange = (e) => {
    setSelectedOptions(
      Array.isArray(e) ? e.map((colorOpt) => colorOpt.label + " ") : []
    );
  };

  return (
    <div className="dropdown">
      <div className="content">
        <Select
          closeMenuOnSelect={false}
          // defaultValue={[colorOptions[4], colorOptions[5]]}
          isMulti
          options={colorOptions}
          onChange={handleChange}
        />
        <div className="selected-inputs">{selectedOptions}</div>
      </div>
    </div>
  );
}
