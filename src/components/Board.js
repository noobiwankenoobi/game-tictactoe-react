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
  } = props;

  ///////////////////
  // CHANGE PLAYER //
  /////////////////////////////
  const changePlayer = () => {
    if (currentPlayer === "playerOne") setCurrentPlayer("playerTwo");
    if (currentPlayer === "playerTwo") setCurrentPlayer("playerOne");
  };

  // TRIAL 1
  // const handleClick = (i) => {
  //   console.log("handleClick is running at index ", i);
  //   console.log("gameBoard is ", gameBoard);

  //   if (currentPlayer === "playerOne") {
  //     setGameBoard((gameBoard) => [
  //       ...gameBoard,
  //       (gameBoard[i] = playerOne.symbol),
  //     ]);
  //     changePlayer(1);
  //   } else if (currentPlayer === "playerTwo") {
  //     setGameBoard((gameBoard) => [
  //       ...gameBoard,
  //       (gameBoard[i] = playerTwo.symbol),
  //     ]);
  //     changePlayer(2);
  //   }
  // };

  ///////////////////
  // HANDLE CLICK //
  /////////////////////////////
  const handleClick = (i) => {
    console.log("handleClick is running at index ", i);
    console.log("gameBoard is ", gameBoard);

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

  /////////////////
  // USE EFFECT //
  ///////////////////////////////////
  useEffect(() => {
    if (gameState.activeGame) {
      const winner = calculateWinner(gameBoard);
      if (winner) {
        setGameState({ activeGame: false, gameOver: true, gameWinner: winner });
        announceWinner(winner);
      } else {
        console.log("No winner yet");
      }
    }
  }, [gameBoard, setGameState, currentPlayer]);

  //////////////////////
  // RENDER SQUARES //
  ///////////////////////////////////
  const renderSquare = (i) => {
    return (
      <Square key={i} value={gameBoard[i]} i={i} handleClick={handleClick} />
    );
  };

  /////////////////
  // JSX RETURN //
  ////////////////////////////
  return (
    <div className="container grid grid-cols-3 border-2 border-gray-400 gap-4 p-4 w-auto rounded-lg bg-gray-100">
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
  );
};

export default Board;
