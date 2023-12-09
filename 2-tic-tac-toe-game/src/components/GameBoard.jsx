import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBaord, setGameBoard] = useState(initialGameBoard);

  function handleClickBoard(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // update the game board via a copy of the previous game board
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });

    // onSelectSquare is triggered by handleClickBoard once click a button, which is lifted to App.jsx to switch player
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBaord.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClickBoard(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
