import React, { useEffect, useState } from "react";

const Square = (props) => {
  const { value, i, handleClick, gameState } = props;
  // STATE
  const [clicked, setClicked] = useState(false);

  /////////////////
  // USE EFFECT //
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
    }
  }, [gameState]);

  const clickedSquareJSX = (
    <div
      onClick={() => handleClick(i)}
      className="square flex items-center justify-center bg-gray-800 bg-opacity-25 border-8 border-cyberhotpink-100 h-32 w-32 rounded-md text-5xl"
      // style={{ borderColor: "#FE0651" }}
    >
      {value}
    </div>
  );

  const emptySquareJSX = (
    <div
      onClick={() => handleClick(i)}
      className="square flex items-center justify-center bg-gray-800 bg-opacity-25 border border-gray-800 h-32 w-32 rounded-md text-4xl shadow-md"
    >
      {value}
    </div>
  );

  const SquareJSX = clicked ? clickedSquareJSX : emptySquareJSX;

  return SquareJSX;
};

export default Square;
