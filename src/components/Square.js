import React, { useEffect, useState } from "react";

const Square = (props) => {
  const { value, i, handleClick } = props;

  return (
    <div
      onClick={() => handleClick(i)}
      className="square flex items-center justify-center border border-gray-400 h-32 w-32 rounded-md text-4xl"
    >
      {value}
    </div>
  );
};

export default Square;
