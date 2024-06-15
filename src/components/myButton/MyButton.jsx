import React from "react";
import './myButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MyButton = ({ name, type, icon }) => {
  return (
    <button type={type} className="my-button" >
    <span className="button-icon"><FontAwesomeIcon icon={icon} /> </span>
    {name}
  </button>
  );
};
export default MyButton;
