import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./myButton.module.css";

interface IbuttonProps{
  name: string,
  type: "button" | "submit" | "reset" ,	
  icon?: any;
  
}
const MyButton = ({ name, type, icon }: IbuttonProps) => {
  return (
    <button type={type} className={styled.my_button} >
    <span className="button-icon"><FontAwesomeIcon icon={icon} /> </span>
    {name}
  </button>
  );
};
export default MyButton;
