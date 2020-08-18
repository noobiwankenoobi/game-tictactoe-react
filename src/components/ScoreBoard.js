import React from "react";

const ScoreBoard = (props) => {
  const { score } = props;

  const ScoreBoardJSX = (
    <div className="container flex justify-center items-center w-auto h-auto bottom-0 border border-solid border-gray-800 fixed rounded-t shadow-md">
      <div className="player-one-box flex flex-col p-4">
        <div
          className="score-title w-32 h-10 flex justify-center items-center border border-solid border-gray-800 rounded-md shadow-sm text-xs"
          style={{ color: "#FC9B0B" }}
        >
          playerOne
        </div>
        <div
          className="score-title w-32 h-24 mt-4 flex justify-center items-center border border-solid border-gray-800  bg-gray-800 bg-opacity-25 rounded-md text-4xl"
          style={{ color: "#60C5DB" }}
        >
          {score.playerOneWins}
        </div>
      </div>
      <div className="player-two-box flex flex-col p-4">
        <div
          className="score-title w-32 h-10 flex justify-center items-center border border-solid border-gray-800 rounded-md shadow-sm text-xs"
          style={{ color: "#FC9B0B" }}
        >
          playerTwo
        </div>
        <div
          className="score-title w-32 h-24 mt-4 flex justify-center items-center bg-gray-800 bg-opacity-25 border border-solid border-gray-800 rounded-md text-4xl"
          style={{ color: "#60C5DB" }}
        >
          {score.playerTwoWins}
        </div>
      </div>
    </div>
  );

  return ScoreBoardJSX;
};

export default ScoreBoard;
