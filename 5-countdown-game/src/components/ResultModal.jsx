export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} secondes.</strong>
      </p>
      <p>
        You stopped the time with <strong>{result} secondes </strong>left
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
