import React, { useContext } from "react";
import "../App.css";
import { quizContext } from "../Helper/Context";
import Questions from "../Helper/Questions";


const EndScreen = () => {
  const { score, setScore,setquizState, userName } = useContext(quizContext );

  const restartQuiz = () => {
   setScore(0);
   setquizState("start");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <h3> Thanks {userName}</h3>
    </div>
  );
};

export default EndScreen;