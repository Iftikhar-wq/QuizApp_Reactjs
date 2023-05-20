import {useState } from "react";
import "./App.css";
import Quiz from "./Compnents/Quiz";
import EndQuiz from "./Compnents/EndQuiz";
import { quizContext } from "./Helper/Context";
import StartQuiz from "./Compnents/StartQuiz";

function App() {
  const [quizState, setquizState] = useState("start");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <quizContext.Provider value={{quizState,setquizState,userName,setUserName,score,setScore}} >
        {quizState === "start" && <StartQuiz/>}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endquiz" && <EndQuiz />}
      </quizContext.Provider>
    </div>
  );
}

export default App;
