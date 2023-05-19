import React from "react";
import Select from "react-select";
import { colorOptions } from "./data";
import "./styles.css";

export default function AnimatedMulti() {
  return (
    <div className="dropdown">
      <div className="content">
        <Select
          closeMenuOnSelect={false}
          defaultValue={[colorOptions[4], colorOptions[5]]}
          isMulti
          options={colorOptions}
        />
      </div>
    </div>
  );
}
