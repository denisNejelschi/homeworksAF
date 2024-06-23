import React from "react";
import "./lesson08.css";
import Button from "../../components/button/Button";


const Lesson08 = () => {
  const consolePush = () => {
    console.log("Push me");
  };
  const consoleTouch = () => {
    console.log("Touch me");
  };
  const consoleGet = () => {
    console.log("Get satisfaction");
  };
  type MyArray = string[];
  const fruits: MyArray = ["apple", "banana", "orange"];

  const ages = [23, 25, 36, 78, 55];
  // const ages:MyArray=[23,25,36,78,55]; error!
  type MyArray1<T> = T[];
  const fruits1: MyArray1<string> = ["apple", "banana", "orange"];
  const ages1: MyArray1<number> = [23, 25, 36, 78, 55];
  //no more error!

  //emums 

  enum Seasons {
    Winter = "Winter",
    Spring = "Spring",
    Summer = "Summer",
    Autumn = "Autumn",
  }
  const summer = Seasons.Summer;

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

  return (
    <div className="container">
      <h1>Lesson 08 React on TS</h1>
      <div className="buttons">
        <Button
          buttonText="Push me"
          isGetButton={true}
          onButtonClick={consolePush}
        />
        <Button
          buttonText="Touch me"
          isGetButton={false}
          onButtonClick={consoleTouch}
        />
        <Button
          buttonText="Get satisfaction"
          isGetButton={true}
          onButtonClick={consoleGet}
        />
      </div>
      <div className="generics">
        <h1>Generics</h1>
       <div className="arrays">
       {fruits1.map((fruit) => (
            <p>{fruit}</p>
        ))}
        {ages1.map((age) => (
            <p>{age}</p>
        ))}
       <h2> {getFirst(ages1)}</h2>
       </div>
       <p>{summer}</p>
      </div>
     
      
    </div>
  );
};
export default Lesson08;
