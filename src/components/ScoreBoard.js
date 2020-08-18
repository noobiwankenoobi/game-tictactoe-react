import React from "react";

const ScoreBoard = (props) => {
  const { score, currentPlayer, resetSession } = props;

  const ResetButtonJSX = (
    <button
      className="border border-opacity-50 transition ease-in-out duration-300 transform border-cyberburnorange-100 text-cyberburnorange-100 text-opacity-75 text-xs p-1 mb-6 sm:mb-12 focus:outline-none rounded hover:scale-110 hover:border-cyberhotpink-100 hover:border-opacity-75"
      onClick={resetSession}
    >
      reset session
    </button>
  );

  const ScoreBoardJSX = (
    <div className="container flex flex-col justify-center items-center w-auto h-auto bottom-0 fixed ">
      {ResetButtonJSX}
      <div className="container flex justify-center items-center w-auto h-auto">
        <div
          className={`player-one-box flex flex-col bg-gray-800 bg-opacity-25 rounded-tl-md ${
            currentPlayer === "playerOne"
              ? "border-2 border-solid  border-cyberhotpink-100 border-b-0 animate-pulse"
              : "border border-solid border-gray-800 border-b-0"
          }`}
        >
          <div className="score-title w-32 h-10 mt-2 flex justify-center items-center text-xs text-cyberburnorange-100">
            playerOne
          </div>
          <div className="score-title w-32 h-10 sm:h-16 mt-1 mb-4 flex justify-center items-center rounded-md text-4xl text-cyberdesatyellow-100">
            {score.playerOneWins}
          </div>
        </div>
        <div
          className={`player-one-box flex flex-col bg-gray-800 bg-opacity-25 rounded-tr-md ${
            currentPlayer === "playerTwo"
              ? "border border-solid  border-cyberhotpink-100 border-b-0 animate-pulse"
              : "border border-solid border-gray-800 border-b-0"
          }`}
        >
          <div className="score-title w-32 h-10 mt-2 flex justify-center items-center text-xs text-cyberburnorange-100">
            playerTwo
          </div>
          <div className="score-title w-32 h-10 sm:h-16 mt-1 mb-4 flex justify-center items-center  rounded-md text-4xl text-cyberdesatyellow-100">
            {score.playerTwoWins}
          </div>
        </div>
      </div>
    </div>
  );

  return ScoreBoardJSX;
};

export default ScoreBoard;
