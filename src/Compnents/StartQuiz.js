import { useContext } from "react";
import { quizContext } from "../Helper/Context";
import "../App.css";

const StartQuiz = () => {
  const { setquizState, setUserName ,userName} = useContext(quizContext);
  const handleStartQuiz = () => {
    if (userName.trim()==='') {
      alert('Please enter your name to start the quiz.');
    } else {
      setquizState("quiz");
    }
  };

  return (
    <div className="Menu">
      <h2>Start Quiz</h2>
      <label>Enter Your Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartQuiz;
