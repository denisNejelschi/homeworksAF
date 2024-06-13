import React from "react";
import './input.css'

function Input({name, type, placeholder, label}){
    return(
        <div className="inputContainer">
            <label className="input-label">{label}</label>
            <input name={name} type={type} placeholder={placeholder} 
            className="input-field" />
        </div>
    );
};
export default Input;