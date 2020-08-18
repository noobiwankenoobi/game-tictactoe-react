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
      className={`square flex items-center justify-center bg-gray-800 bg-opacity-25 border-2 border-cyberhotpink-100 border-opacity-75 h-16 w-16 xl:h-24 xl:w-24 rounded-md text-5xl  shadow-2xl disabled ${
        winnerSquare ? "animate-bounce" : ""
      }`}
      style={{ pointerEvents: "none" }}
    >
      {value}
    </div>
  );

  const emptySquareJSX = (
    <div
      onClick={() => handleClick(i)}
      className="square flex items-center justify-center h-16 w-16 xl:h-24 xl:w-24 border border-1 border-gray-800 border-opacity-25 rounded-md bg-gray-800 bg-opacity-25 shadow-md transition duration-500 ease-in-out transform hover:scale-105 hover:border-cyberburnorange-100 hover:border-dashed hover:border-opacity-50"
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
