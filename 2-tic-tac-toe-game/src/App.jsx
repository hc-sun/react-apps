import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_CONDITIONS } from "./winning-conditions";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    // update gameBoard
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const condition of WINNING_CONDITIONS) {
    // destructuring
    const [a, b, c] = condition;

    // check if all 3 squares are the same non-null value
    if (
      gameBoard[a.row][a.col] &&
      gameBoard[a.row][a.col] === gameBoard[b.row][b.col] &&
      gameBoard[a.row][a.col] === gameBoard[c.row][c.col]
    ) {
      winner = gameBoard[a.row][a.col];
      break;
    }
  }

  // no winner, but board is full
  const isBoardFull = gameTurns.length === 9 && !winner;

  function handleSwitchPlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleReset() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = {
        ...prevPlayers,
        [playerSymbol]: newName,
      };

      return updatedPlayers;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || isBoardFull) && (
          <GameOver winner={winner} onReset={handleReset} />
        )}
        <GameBoard onSelectSquare={handleSwitchPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
