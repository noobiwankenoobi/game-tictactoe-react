import React, { useState, useEffect } from "react";
// Components
import Board from "./components/Board";

function App() {
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

  return (
    <div className="App">
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        gameState={gameState}
        setGameState={setGameState}
        playerOne={playerOne}
        playerTwo={playerTwo}
      />
    </div>
  );
}

export default App;
