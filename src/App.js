import React, { useState, useEffect } from "react";
// Components
import Board from "./components/Board";
import AnnounceModal from "./components/AnnounceModal";

const App = () => {
  ////////////////
  // APP STATE //
  ////////////////////////////
  const [currentPlayer, setCurrentPlayer] = useState("playerOne");
  const [playerOne, setPlayerOne] = useState({
    name: "Player One",
    wins: 0,
    symbol: "X",
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "Player Two",
    wins: 0,
    symbol: "O",
  });
  const [gameState, setGameState] = useState({
    activeGame: true,
    gameOver: false,
    gameWinner: "",
  });
  ///////////////////////////////////////////////////////////

  //////////////////////
  // ANNOUNCE WINNER //
  ///////////////////////////////
  const announceWinner = (winner) => {
    console.log(`${winner} is the winner!!`);
  };

  //////////
  // JSX //
  /////////////////////////////
  const AppJSX = (
    <div className="App container h-screen w-screen flex flex-col justify-center items-center mx-auto  ">
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        gameState={gameState}
        setGameState={setGameState}
        playerOne={playerOne}
        playerTwo={playerTwo}
        announceWinner={announceWinner}
      />
      <AnnounceModal gameState={gameState} />
    </div>
  );

  return AppJSX;
};

export default App;
