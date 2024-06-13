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
        placeholder="enter your username"
        label="Username"
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <MyButton name="Login" type="submit" />
    </form>
  );
};
export default LoginForm;
