import React from "react";

const ScoreBoard = (props) => {
  const { score, currentPlayer } = props;

  const ScoreBoardJSX = (
    <div className="container flex justify-center items-center w-auto h-auto bottom-0 fixed ">
      <div
        className={`player-one-box flex flex-col bg-gray-800 bg-opacity-25 rounded-tl-md ${
          currentPlayer === "playerOne"
            ? "border border-solid  border-cyberhotpink-100 border-b-0"
            : "border border-solid border-gray-800 border-b-0"
        }`}
      >
        <div className="score-title w-32 h-10 mt-2 flex justify-center items-center text-xs text-cyberburnorange-100">
          playerOne
        </div>
        <div className="score-title w-32 h-16 mt-1 mb-4 flex justify-center items-center rounded-md text-4xl text-cyberlightblue-100">
          {score.playerOneWins}
        </div>
      </div>
      <div
        className={`player-one-box flex flex-col bg-gray-800 bg-opacity-25 rounded-tr-md ${
          currentPlayer === "playerTwo"
            ? "border border-solid  border-cyberhotpink-100 border-b-0"
            : "border border-solid border-gray-800 border-b-0"
        }`}
      >
        <div className="score-title w-32 h-10 mt-2 flex justify-center items-center text-xs text-cyberburnorange-100">
          playerTwo
        </div>
        <div className="score-title w-32 h-16 mt-1 mb-4 flex justify-center items-center  rounded-md text-4xl text-cyberlightblue-100">
          {score.playerTwoWins}
        </div>
      </div>
    </div>
  );

  return ScoreBoardJSX;
};

export default ScoreBoard;
