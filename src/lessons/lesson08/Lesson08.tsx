import React from "react";
import "./lesson08.css";
import Button from "../../components/button/Button";

const Lesson08 = () => {
const consolePush = () => {
    console.log("Push me");
}
const consoleTouch = () => {
    console.log("Touch me");
}
const consoleGet = () => {
    console.log("Get satisfaction");
}

  return (
    <div className="container">
      <h1>Lesson 08 React on TS</h1>
      <div className="buttons">
        <Button buttonText="Push me" isGetButton={true} onButtonClick={consolePush} />
        <Button buttonText="Touch me" isGetButton={false} onButtonClick={consoleTouch} />
        <Button buttonText="Get satisfaction" isGetButton={true} onButtonClick={consoleGet} />
      </div>
    </div>
  );
};
export default Lesson08;
