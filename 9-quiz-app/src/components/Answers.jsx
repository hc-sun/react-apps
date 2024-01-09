import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  // if not shuffled, shuffle answers
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        // check if current output "answer" is user's answer
        const isSeletecdAnswer = selectedAnswer === answer;
        let cssClass = "";

        // if current answer is seletecd answer, add css to cssClass
        if (answerState === "answered" && isSeletecdAnswer) {
          cssClass = "selected";
        }

        // add css to cssClass if current answer is correct or wrong
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSeletecdAnswer
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
