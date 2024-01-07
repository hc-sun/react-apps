import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  // if haven't answered current question, activeQuestionIdx is the length of the array
  const activeQuestionIdx =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsOver = activeQuestionIdx === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },

    setTimeout(() => {
      // first answer is the correct one
      if (selectedAnswer === QUESTIONS[activeQuestionIdx].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        // after marking answer, reset state
        setAnswerState("");
      }, 2000);
    }, 1000),
    [activeQuestionIdx]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIdx].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIdx}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIdx].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            // check if current output "answer" is user's answer
            const isSeletecdAnswer =
              userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            // if current answer is seletecd answer, add css to cssClass
            if (answerState === "answered" && isSeletecdAnswer) {
              cssClass = "selected";
            }

            // add css to cssClass if current answer is correct or wrong
            if (
              answerState === "correct" ||
              (answerState === "wrong" && isSeletecdAnswer)
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
