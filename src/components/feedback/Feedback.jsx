import React, { useState } from "react";
import "./feedback.css";
import MyButton from "../myButton/MyButton";
import { faThumbsUp, faThumbsDown, faUndo } from "@fortawesome/free-solid-svg-icons";


const Feedback = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [showReset, setShowReset] = useState(false); 

  const addLike = () => {
    setLike(like + 1);
    setShowReset(true); 
  };

  const addDislike = () => {
    setDislike(dislike + 1);
    setShowReset(true); 
  };

  const reset = () => {
    setLike(0);
    setDislike(0);
    setShowReset(false); 
  };

  return (
    <>
    
    <div className="feedback-container">      
      <div className="feedback-item" onClick={addLike}>
        <MyButton type="button" name="Like" icon={faThumbsUp} />
       {showReset && <p>{like}</p>}
      </div>

      <div className="feedback-item" onClick={addDislike}>
        <MyButton type="button" name="Dislike" icon={faThumbsDown} />
        { showReset && <p>{dislike}</p>}
      </div>

      {showReset && ( 
        <div className="feedback-item" onClick={reset}>
          <MyButton type="button" name="Reset" icon={faUndo} />
        </div>
      )}
    </div>
    </>
  );
};

export default Feedback;
