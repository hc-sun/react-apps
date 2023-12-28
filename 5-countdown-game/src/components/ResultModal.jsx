import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const hasLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      openDiag() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {hasLost && <h2>You Lost</h2>}
      {!hasLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} secondes.</strong>
      </p>
      <p>
        You stopped the time with{" "}
        <strong>{formattedRemainingTime} secondes </strong>left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
