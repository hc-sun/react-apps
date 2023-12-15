export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Winner is: {winner}</p>}
      {!winner && <p>It's a tie!</p>}
      <p>
        <button>Play Again!</button>
      </p>
    </div>
  );
}
