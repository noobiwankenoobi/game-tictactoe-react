import React, { useState, useEffect } from "react";
// Components
import Board from "./components/Board";
import AnnounceModal from "./components/AnnounceModal";
import ScoreBoard from "./components/ScoreBoard";
import Header from "./components/Header";

const App = () => {
  ////////////////
  // APP STATE //
  ////////////////////////////
  // Players
  const [currentPlayer, setCurrentPlayer] = useState("playerOne");
  const [playerOne, setPlayerOne] = useState({
    name: "playerOne",
    wins: 0,
    symbol: "X",
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: "playerTwo",
    wins: 0,
    symbol: "O",
  });
  // Game
  const [gameState, setGameState] = useState({
    activeGame: true,
    gameOver: false,
    gameWinner: "",
  });
  const boardInitialState = ["", "", "", "", "", "", "", "", ""];
  const [gameBoard, setGameBoard] = useState(boardInitialState);
  const [score, setScore] = useState({
    playerOneWins: 0,
    playerTwoWins: 0,
  });
  // Messages
  const [isOpen, setModal] = useState(false);
  const [winMessage, setWinMessage] = useState(null);

  ///////////////////////////////////////////////////////////

  //////////////////
  // USE EFFECTS //
  //////////////////////////////////////
  // Sets the score from any existing localStorage after pageload and refresh
  useEffect(() => {
    let p1winsFromStorage = parseInt(localStorage.getItem("playerOneWins"));
    let p2winsFromStorage = parseInt(localStorage.getItem("playerTwoWins"));
    setScore({
      playerOneWins: p1winsFromStorage,
      playerTwoWins: p2winsFromStorage,
    });
  }, []);

  // Sets the current score to localStorage
  useEffect(() => {
    const { playerOneWins, playerTwoWins } = score;
    const setScoreToLocal = () => {
      localStorage.setItem("playerOneWins", playerOneWins);
      localStorage.setItem("playerTwoWins", playerTwoWins);
    };
    setScoreToLocal();
  }, [score]);

  ////////////////////////
  // CHANGE SCOREBOARD //
  ////////////////////////////////////////
  const changeScoreBoard = (winner) => {
    if (playerOne.symbol === winner) {
      setScore({ ...score, playerOneWins: score.playerOneWins + 1 });
    } else if (playerTwo.symbol === winner) {
      setScore({ ...score, playerTwoWins: score.playerTwoWins + 1 });
    }
  };

  //////////////////////
  // ANNOUNCE WINNER //
  ///////////////////////////////
  const announceWinner = (winner) => {
    // Get player name from winner symbol
    if (playerOne.symbol === winner) {
      setWinMessage(`${playerOne.name} wins!!`);
    } else if (playerTwo.symbol === winner) {
      setWinMessage(`${playerTwo.name} wins!!`);
    }
    // Then...
    setModal(true);
    changeScoreBoard(winner);
  };

  /////////////////
  // RESET GAME //
  ///////////////////////////////
  const resetGame = () => {
    setGameState({
      activeGame: true,
      gameOver: false,
      gameWinner: "",
    });
    setGameBoard(["", "", "", "", "", "", "", "", ""]);
    setWinMessage(null);
    // setCurrentPlayer("playerOne");
  };

  //////////
  // JSX //
  /////////////////////////////
  const AppJSX = (
    <div className="App h-screen w-screen flex flex-col justify-center items-center mx-auto font-mono bg-gray-900">
      <Header />
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        gameState={gameState}
        setGameState={setGameState}
        playerOne={playerOne}
        playerTwo={playerTwo}
        announceWinner={announceWinner}
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
        resetGame={resetGame}
      />
      <AnnounceModal
        isOpen={isOpen}
        setModal={setModal}
        gameState={gameState}
        winMessage={winMessage}
        resetGame={resetGame}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <ScoreBoard score={score} currentPlayer={currentPlayer} />
    </div>
  );

  return AppJSX;
};

export default App;
