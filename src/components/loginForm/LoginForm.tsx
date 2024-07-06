
import Input from "../input/Input";
import style from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form  className={style.login_form}>
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
      <button type="submit">Login</button>
      
    </form>
  );
};
export default LoginForm;
