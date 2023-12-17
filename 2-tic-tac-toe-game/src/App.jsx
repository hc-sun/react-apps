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

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function updateGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    // update gameBoard
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function checkWinner(gameBoard, players) {
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
      winner = players[gameBoard[a.row][a.col]];
      break;
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = updateGameBoard(gameTurns);

  const winner = checkWinner(gameBoard, players);

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

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      const updatedPlayers = {
        ...prevPlayers,
        [symbol]: newName,
      };

      return updatedPlayers;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
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
