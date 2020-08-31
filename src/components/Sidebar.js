import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <ul className="sidebar">
      {options.map((option) => {
        return (
          <li
            className={option === selectedOption ? "selected" : ""}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
