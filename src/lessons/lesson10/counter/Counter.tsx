import React, { useEffect, useState } from "react";
import style from "../lesson10.module.css";
interface IAction {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const CounterProps = ({ setCount, count }: IAction) => {
  useEffect(() => {
    console.log("effect from counter!");
  }, []);
  console.log('render counter')
  return ( 
    <div className={style.counter}>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>minus!</button>
        <button onClick={() => setCount(count + 1)}>plus!</button>
      </div>
    </div>
  );
};

export default CounterProps;
