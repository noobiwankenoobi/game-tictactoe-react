import React, { useEffect, useState } from "react";

const AnnounceModal = (props) => {
  const {
    gameState,
    isOpen,
    setModal,
    winMessage,
    resetGame,
    currentPlayer,
    setCurrentPlayer,
  } = props;
  const { gameOver, gameWinner } = gameState;

  const [modalType, setModalType] = useState("winner");
  const [deciding, setDeciding] = useState(false);

  ////////////////////////////
  // DECIDE WHO GOES FIRST //
  //////////////////////////////////////
  const decidePlayer = () => {
    console.log("Deciding who goes first...");
    setModalType("thinking");
    setDeciding(true);
    const whoGoesNext = () => {
      let num = Math.random();
      console.log("num is ", num);
      let player = num > 0.5 ? "playerOne" : "playerTwo";
      console.log("player is ", player);
      return player;
    };

    const nextPlayer = whoGoesNext();
    setCurrentPlayer(nextPlayer);
    setDeciding(false);

    // Put on a set timeout (math.random)
    // Assign a new currentPlayer based on this
    // Announce the player who goes first in the modal
    // show a "start" button, then...
  };

  const startNextGame = () => {
    resetGame();
    setModal(false);
    setModalType("winner");
  };

  //////////////////////////
  // HANDLE BUTTON CLICK //
  ////////////////////////////////////
  const handleClick = () => {
    decidePlayer();
  };

  ///////////////////////
  // WINNER MODAL JSX //
  ///////////////////////////////////
  const WinnerModalJSX = (
    <div className="overlay w-screen h-screen fixed top-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-10">
      <div className="flex items-center justify-center h-auto w-full absolute mx-auto my-auto p-20 bg-gray-900 bg-opacity-75 shadow-lg border border-cyberdesatblue-100 border-solid border-r-0 border-l-0 rounded-lg">
        <div className="modal-body flex flex-col items-center justify-center space-y-4 ">
          <span className="text-3xl text-cyberlightblue-100 text-opacity-75">
            {winMessage}
          </span>
          <button
            onClick={handleClick}
            className="font-bold py-2 px-4 bg-gray-900 bg-opacity-50 border border-cyberhotpink-100 rounded-md text-cyberburnorange-100 transition ease-in-out duration-300 transform hover:text-cyberdesatyellow-100 hover:text-opacity-75 hover:bg-cyberhotpink-100 hover:scale-110 hover:bg-opacity-50 hover:border-opacity-50 focus:outline-none"
          >
            next game
          </button>
        </div>
      </div>
    </div>
  );

  // Insert these into thinking modal based on deciding state
  const DecidingJSX = null;

  const DecidedJSX = null;

  /////////////////////
  // THINKING MODAL //
  /////////////////////////////
  const ThinkingModalJSX = (
    <div className="overlay w-screen h-screen fixed top-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-10">
      <div className="flex items-center justify-center h-auto w-full absolute mx-auto my-auto p-20 bg-gray-900 bg-opacity-75 shadow-lg border border-cyberdesatblue-100 border-solid border-r-0 border-l-0 rounded-lg">
        <div className="modal-body flex flex-col items-center justify-center space-y-4 ">
          <span className="text-3xl text-cyberlightblue-100 text-opacity-75">
            calculating who goes first...
          </span>
          <button
            onClick={startNextGame}
            className="font-bold py-2 px-4 bg-gray-900 bg-opacity-50 border border-cyberhotpink-100 rounded-md text-cyberburnorange-100 transition ease-in-out duration-300 transform hover:text-cyberdesatyellow-100 hover:text-opacity-75 hover:bg-cyberhotpink-100 hover:scale-110 hover:bg-opacity-50 hover:border-opacity-50 focus:outline-none"
          >
            start
          </button>
        </div>
      </div>
    </div>
  );

  // MODAL TYPE LOGIC //
  const ModalsJSX = modalType === "winner" ? WinnerModalJSX : ThinkingModalJSX;

  // OPEN AND CLOSE LOGIC //
  const AnnounceModalJSX = !isOpen ? null : ModalsJSX;

  return AnnounceModalJSX;
};

export default AnnounceModal;
