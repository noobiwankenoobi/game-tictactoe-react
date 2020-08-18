import React, { useState, useEffect } from "react";
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
    announceWinner,
    gameBoard,
    setGameBoard,
    resetGame,
    handleDraw,
  } = props;

  const [winningRow, setWinningRow] = useState([]);

  ///////////////////
  // CHANGE PLAYER //
  /////////////////////////////
  const changePlayer = () => {
    if (currentPlayer === "playerOne") setCurrentPlayer("playerTwo");
    if (currentPlayer === "playerTwo") setCurrentPlayer("playerOne");
  };

  ///////////////////
  // HANDLE CLICK //
  /////////////////////////////
  const handleClick = (i) => {
    if (currentPlayer === "playerOne") {
      const board = gameBoard;
      board[i] = playerOne.symbol;
      setGameBoard(board);
      changePlayer();
    } else if (currentPlayer === "playerTwo") {
      const board = gameBoard;
      board[i] = playerTwo.symbol;
      setGameBoard(board);
      changePlayer();
    }
  };

  /////////////////////
  // LOOK FOR DRAW //
  /////////////////////////////////////
  const lookForDraw = (gameBoard) => {
    let checkArray = [];
    checkArray = gameBoard.filter((value) => value === "X" || value === "O");
    // if the array reaches length 9 and there's not already a winner, it means there's a draw
    if (checkArray.length !== 9) {
      return null;
    } else {
      return "draw";
    }
  };

  ///////////////////////
  // CALCULATE WINNER //
  ///////////////////////////////////
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
    // Find the winner
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        setWinningRow(winConditions[i]);
        return gameBoard[a];
      }
    }
    // Otherwise nothing
    return null;
  };

  /////////////////
  // USE EFFECT //
  ///////////////////////////////////
  useEffect(() => {
    if (gameState.activeGame) {
      const draw = lookForDraw(gameBoard);
      const winner = calculateWinner(gameBoard);
      if (winner) {
        setGameState({ activeGame: false, gameOver: true, gameWinner: winner });
        announceWinner(winner);
      } else if (draw) {
        handleDraw();
      }
    }
  }, [gameBoard, setGameState, currentPlayer]);

  //////////////////////
  // RENDER SQUARES //
  ///////////////////////////////////
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={gameBoard[i]}
        i={i}
        handleClick={handleClick}
        gameState={gameState}
        winningRow={winningRow}
        resetGame={resetGame}
      />
    );
  };

  const PlayerTurnJSX = gameState.activeGame ? (
    <span className="text-sm text-cyberdesatyellow-100 text-opacity-75 animate-bounce">{`${currentPlayer}'s turn`}</span>
  ) : (
    <span className="text-sm text-cyberdesatyellow-100 text-opacity-75">
      game over
    </span>
  );

  /////////////////
  // JSX RETURN //
  ////////////////////////////
  return (
    <div className="flex flex-col justify-center items-center  mx-auto my-auto">
      {PlayerTurnJSX}
      <div className="container grid grid-cols-3 gap-4 p-4 w-auto rounded-lg text-cyberlightblue-100">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
