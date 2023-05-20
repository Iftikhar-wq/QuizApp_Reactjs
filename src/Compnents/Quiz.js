import React, { useContext, useState } from "react";
import Questions from "../Helper/Questions";
import { quizContext } from "../Helper/Context";
import "../App.css";


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setquizState } = useContext(quizContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen(""); 
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setquizState("endquiz");
  };

  const handleOptionClick = (option) => {
    setOptionChosen(option);
  };

  return (
    <div className="Quiz">
      <div className="questions">
      <h2>{Questions[currentQuestion].prompt}</h2>
      </div>
      <div className="Option">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => handleOptionClick("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => handleOptionClick("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => handleOptionClick("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => handleOptionClick("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
