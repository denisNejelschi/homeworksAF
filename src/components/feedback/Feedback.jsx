import React, { useState } from "react";
import "./feedback.css";
import MyButton from "../myButton/MyButton";
import { faThumbsUp, faThumbsDown, faUndo } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const  addLike=()=> {
    setLike((prev) => prev + 1);
    console.log(like);
  }

  const  addDislike=()=> {
    setDislike((prev) => prev + 1);
  }

  const reset= ()=> {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-item" onClick={addLike}>
        <MyButton type="button" name="Like" icon={faThumbsUp}   />
        <p>{like}</p>
      </div>

      <div className="feedback-item" onClick={addDislike}>
        <MyButton type="button" name="Dislike" icon={faThumbsDown}  />
        <p>{dislike}</p>
      </div>

      <div className="feedback-item"  onClick={reset}>
        <MyButton type="button" name="Reset" icon={faUndo}  />
      </div>
    </div>
  );
};

export default Feedback;
