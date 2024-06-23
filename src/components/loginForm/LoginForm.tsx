import React from "react";
import MyButton from "../myButton/MyButton";
import Input from "../input/Input";
import "./loginForm.css";

const LoginForm = () => {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <Input
        name="name"
        type="user"
        placeholder="Enter your username"
        label="Username"
        
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Input
        name="IBAN"
        type="password"
        placeholder="Enter your CVV"
        label="Confirmation $"
      />
      <MyButton name="Login" type="submit" icon={undefined} />
      
    </form>
  );
};
export default LoginForm;
