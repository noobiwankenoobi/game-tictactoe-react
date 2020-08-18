import React, { useState } from "react";

const AnnounceModal = (props) => {
  const {
    isOpen,
    setModal,
    winMessage,
    resetGame,
    currentPlayer,
    setCurrentPlayer,
  } = props;

  const [modalType, setModalType] = useState("winner");
  const [deciding, setDeciding] = useState(false);

  ////////////////////////////
  // DECIDE WHO GOES FIRST //
  //////////////////////////////////////
  const decidePlayer = () => {
    setModalType("thinking");
    setDeciding(true);
    const whoGoesNext = () => {
      let num = Math.random();
      // console.log("num is ", num);
      let player = num > 0.5 ? "playerOne" : "playerTwo";
      // console.log("player is ", player);
      return player;
    };

    setTimeout(function () {
      const nextPlayer = whoGoesNext();
      setCurrentPlayer(nextPlayer);
      setDeciding(false);
    }, 3000);
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

  // Insert these into thinking modal based on deciding state
  const DecidingJSX = (
    <>
      <span className="text-2xl text-cyberhotpink-100 text-opacity-75 animate-ping">
        thinking
      </span>

      <span className="text-sm sm:text-lg text-center text-cyberburnorange-100 text-opacity-75">
        ai is calculating who goes first...
      </span>
    </>
  );

  const DecidedJSX = (
    <>
      <span className="text-md sm:text-2xl text-cyberlightblue-100 text-opacity-100">
        {`${currentPlayer} goes first!`}
      </span>

      <button
        onClick={startNextGame}
        className="font-bold py-2 px-4 bg-gray-900 bg-opacity-50 border border-cyberhotpink-100 rounded-md text-cyberburnorange-100 transition ease-in-out duration-300 transform hover:text-cyberdesatyellow-100 hover:text-opacity-75 hover:bg-cyberhotpink-100 hover:scale-110 hover:bg-opacity-50 hover:border-opacity-50 focus:outline-none"
      >
        start game
      </button>
    </>
  );

  const ModalBodyJSX = deciding ? DecidingJSX : DecidedJSX;

  /////////////////////
  // THINKING MODAL //
  /////////////////////////////
  const ThinkingModalJSX = (
    <div className="modal-overlay w-screen h-screen fixed top-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-10">
      <div className="modal-main flex items-center justify-center h-auto w-full absolute mx-auto my-auto p-20 bg-gray-900 bg-opacity-75 shadow-lg border border-cyberdesatblue-100 border-solid border-r-0 border-l-0 rounded-lg">
        <div className="modal-body flex flex-col items-center justify-center space-y-4 ">
          {ModalBodyJSX}
        </div>
      </div>
    </div>
  );

  ///////////////////////
  // WINNER MODAL JSX //
  ///////////////////////////////////
  const WinnerModalJSX = (
    <div className="modal-overlay w-screen h-screen fixed top-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-10">
      <div className="modal-main flex items-center justify-center h-auto w-full absolute mx-auto my-auto p-20 bg-gray-900 bg-opacity-75 shadow-lg border border-cyberdesatblue-100 border-solid border-r-0 border-l-0 rounded-lg">
        <div className="modal-body flex flex-col items-center justify-center space-y-4 ">
          <span className="text-xl sm:text-3xl text-cyberlightblue-100 text-opacity-75">
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

  // MODAL TYPE LOGIC //
  const ModalsJSX = modalType === "winner" ? WinnerModalJSX : ThinkingModalJSX;

  // OPEN AND CLOSE LOGIC //
  const AnnounceModalJSX = !isOpen ? null : ModalsJSX;

  return AnnounceModalJSX;
};

export default AnnounceModal;
