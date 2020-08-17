import React from "react";

const ScoreBoard = (props) => {
  const { score } = props;

  const ScoreBoardJSX = (
    <div className="container flex justify-center items-center w-auto h-auto bottom-0 border border-solid border-gray-400 fixed rounded-t">
      <div className="player-one-box flex flex-col p-4">
        <div className="score-title w-32 h-10 flex justify-center items-center border border-solid border-gray-400">
          Player One
        </div>
        <div className="score-title w-32 h-24 mt-4 flex justify-center items-center border border-solid border-gray-400">
          {score.playerOneWins}
        </div>
      </div>
      <div className="player-two-box flex flex-col p-4">
        <div className="score-title w-32 h-10 flex justify-center items-center border border-solid border-gray-400">
          Player Two
        </div>
        <div className="score-title w-32 h-24 mt-4 flex justify-center items-center border border-solid border-gray-400">
          {score.playerTwoWins}
        </div>
      </div>
    </div>
  );

  return ScoreBoardJSX;
};

export default ScoreBoard;
