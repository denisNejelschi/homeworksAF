import React from "react";
import './myButton.css'
const MyButton = ({ name, type }) => {
  return (
    <button type={type} className="my-button">
      {name}
    </button>
  );
};
export default MyButton;
