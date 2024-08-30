import React from "react";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";

interface ResultProps {
  playerMove: string;
  computerMove: string | null;
  verdict: string | null;
  resetGame: () => void;
}

const Result: React.FC<ResultProps> = ({
  playerMove,
  computerMove,
  verdict,
  resetGame,
}) => {
  const renderMove = (move: string | null) => {
    if (move === "rock") {
      return <Rock />;
    } else if (move === "scissors") {
      return <Scissors />;
    } else if (move === "paper") {
      return <Paper />;
    } else {
      return "Loading...";
    }
  };

  return (
    <div className="flex  items-center mb-10 md:mb-72 text-white text-center gap-10 md:gap-20">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-10 md:gap-20">
        {/* You picked */}
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl md:text-2xl">You Picked</h1>
          <div className="mt-4 md:mt-20 scale-125 md:scale-150">
            {renderMove(playerMove)}
          </div>
        </div>
        {/* Verdict */}
        <div className="flex flex-col gap-2 items-center">
          <div className="text-lg md:text-4xl">{verdict}</div>
          <button
            className="bg-white text-black px-11 py-2 rounded mt-4"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
        {/* Computer Picked */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl md:text-2xl">The House Picked</h2>
          <div className="mt-4 md:mt-20 scale-125 md:scale-150">
            {renderMove(computerMove) || "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
