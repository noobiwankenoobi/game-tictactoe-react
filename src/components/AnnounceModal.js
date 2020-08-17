import React, { useEffect } from "react";

const AnnounceModal = (props) => {
  const { gameState, isOpen, setModal, winMessage, resetGame } = props;
  const { gameOver, gameWinner } = gameState;

  const handleClick = () => {
    setModal(false);
    resetGame();
  };

  const modalJSX = (
    <div className="flex items-center justify-center h-40 w-64 absolute mx-auto my-auto bg-gray-100 shadow-md border border-gray-600 border-solid">
      <div className="modal-body flex flex-col items-center justify-center space-y-2  bg-gray-100">
        <h1>{winMessage}</h1>
        <button onClick={handleClick}>Start New Game</button>
      </div>
    </div>
  );

  const AnnounceModalJSX = !isOpen ? null : modalJSX;

  return AnnounceModalJSX;
};

export default AnnounceModal;
