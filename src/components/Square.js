import React from "react";

const Square = (props) => {
  const { value } = props;

  return (
    <div className="square flex items-center justify-center border border-gray-400 h-20 w-20 rounded-lg">
      {value}
    </div>
  );
};

export default Square;
