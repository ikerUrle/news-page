import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="sidebar">
      {selectedOption && (
        <button class="reset-button" onClick={() => setSelectedOption("")}>
          <i class="fas fa-undo"></i>
        </button>
      )}
      <ul className="categories">
        {options.map((option) => {
          return (
            <li
              className={option === selectedOption ? "selected" : ""}
              onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          );
        })}
      </ul>
      <i class="fas fa-long-arrow-alt-down icon"></i>
    </div>
  );
};

export default Sidebar;
