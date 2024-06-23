import React from "react";
import './input.css'

interface IInputProps{
    name: string,
    type: string,
    placeholder: string,
    label: string
    
}
  


function Input({name, type, placeholder, label}: IInputProps){
    return(
        <div className="inputContainer">
            <label className="input-label">{label}</label>
            <input name={name} type={type} placeholder={placeholder} 
            className="input-field" />
        </div>
    );
};
export default Input;