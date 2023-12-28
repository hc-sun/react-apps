import { useState, useRef } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerStarted = timeRemaining < targetTime * 1000 && timeRemaining > 0;

  // if the time remaining is less than or equal to 0, clear the interval and open the dialog
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.openDiag();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  // if the timer is started, start the interval
  function handleStart() {
    // store the timer id in the ref
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.openDiag();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result="lost"
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Challenge started" : "Challenge not started"}
        </p>
      </section>
    </>
  );
}
