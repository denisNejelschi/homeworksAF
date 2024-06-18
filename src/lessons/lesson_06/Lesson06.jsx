import React from "react";
import "./lesson06.css";
import { brotherhood } from "./data";
import { v4 } from "uuid";
import { Info } from "./independent/info";
import Card from "./independent/Card";

const Lesson06 = () => {
    // console.log(Info)
  return (
    <div>
      <h1>Lesson 06</h1>
      {Info.map((moto) => (
       <Card key={v4()} moto={moto}/>
      ))};     
    </div>

  );
};

export default Lesson06;
