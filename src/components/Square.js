import React, { useEffect, useState } from "react";

const Square = (props) => {
  const { value, i, handleClick, gameState, winningRow } = props;
  // STATE
  const [clicked, setClicked] = useState(false);
  const [winnerSquare, setWinnerSquare] = useState(false);

  //////////////////
  // USE EFFECTS //
  ///////////////////////////////
  useEffect(() => {
    if (value !== "") {
      setClicked(true);
    }
  }, [value]);

  useEffect(() => {
    console.log(
      `useEffect on clicked change is running and clicked is ${clicked}`
    );
  }, [clicked]);

  useEffect(() => {
    if (gameState.activeGame) {
      setClicked(false);
      setWinnerSquare(false);
    }
  }, [gameState]);

  useEffect(() => {
    const [a, b, c] = winningRow;
    if (a === i || b === i || c === i) {
      setWinnerSquare(true);
    }
  }, [winningRow, i]);

  //////////////////
  // SQUARES JSX //
  /////////////////////////////////
  const clickedSquareJSX = (
    <div
      onClick={() => handleClick(i)}
      className={`square flex items-center justify-center bg-gray-800 bg-opacity-25 border-2 border-cyberhotpink-100 h-32 w-32 rounded-md text-5xl shadow-xl ${
        winnerSquare ? "animate-bounce" : ""
      }`}
    >
      {value}
    </div>
  );

  const emptySquareJSX = (
    <div
      onClick={() => handleClick(i)}
      className="square flex items-center justify-center border border-cyberburnorange-100 bg-gray-800 bg-opacity-25 border-dashed border-opacity-25 h-32 w-32 rounded-md text-4xl shadow-md"
    >
      {value}
    </div>
  );

  ////////////////////////
  // SQUARES JSX LOGIC //
  ///////////////////////////////////
  const SquareJSX = clicked ? clickedSquareJSX : emptySquareJSX;

  return SquareJSX;
};

export default Square;
