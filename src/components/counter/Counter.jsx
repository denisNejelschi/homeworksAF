import React, { useState } from "react";
import "./counter.css";

function Counter() {
  console.log("render!");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  function countPlus() {
    setCount((prev) => prev + 1);
    console.log(count);
  }

  const addItem = () => {
    setArr((prevArr) => [...prevArr, "item"]);
    console.log(arr);
  };
  const removeLastItem = () => {
    if (arr.length > 0) {
      setArr((prevArr) => prevArr.slice(0, -1));
    }
  };

  return (
    <>
      <div className="counter-container">
        <p><span>Lesson 05</span></p>
        <p>
          Counter with <span>useState()</span> hook:{" "}
        </p>
        <p>{count}</p>
        <button onClick={countPlus}>Plus</button>

        <p>
          <span>Count Array</span>
        </p>
        <ul>
          {arr.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
        <button onClick={removeLastItem}>Delete last</button>
      </div>
    </>
  );
}

export default Counter;
