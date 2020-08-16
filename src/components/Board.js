import React from "react";
// Components
import Square from "./Square";

const Board = (props) => {
  const {

    gameState,
    setGameState,
    playerOne,
    playerTwo,
    currentPlayer,
    setCurrentPlayer,
  } = props;

  const [gameBoard, setGameBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const changePlayer = (number) => {
    if (number === 1) setCurrentPlayer("playerTwo")
    if (number === 2) setCurrentPlayer("playerOne")

  }

  const handleClick = (i) => {
    if (currentPlayer === "playerOne") {
    setGameBoard(...gameBoard, gameBoard[i] === playerOne.symbol )
    changePlayer(1)
  } else (currentPlayer === "playerTwo") {
    setGameBoard(...gameBoard, gameBoard[i] === playerTwo.symbol)
    changePlayer(2)
  }
  };



  const calculateWinner = (gameBoard) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(gameBoard);
  if (winner) {
    setGameState({ activeGame: false, gameOver: true, gameWinner: winner });
  } else {
  }

  // RENDER SQUARES
  const renderSquare = (i) => {
    return <Square value={gameBoard[i]} onClick={() => handleClick(i)} />;
  };

  // JSX RETURN
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;