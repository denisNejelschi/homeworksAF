import React from "react";
import './myButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IbuttonProps{
  name: string,
  type: "button" | "submit" | "reset" ,	
  icon: any;
  
}
const MyButton = ({ name, type, icon }: IbuttonProps) => {
  return (
    <button type={type} className="my_button" >
    <span className="button-icon"><FontAwesomeIcon icon={icon} /> </span>
    {name}
  </button>
  );
};
export default MyButton;