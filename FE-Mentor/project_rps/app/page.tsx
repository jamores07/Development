"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import Result from "@/components/Result";
import ScoreCard from "@/components/ScoreCard";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [score, setScore] = useState(0);
  const [playerMove, setPlayerMove] = useState<string | null>(null);
  const [computerMove, setComputerMove] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<string | null>(null);

  const handleMoveClick = (move: string) => {
    const computerMove = getRandomMove();
    setPlayerMove(move);
    setComputerMove(computerMove);
    getResult(move, computerMove);
  };

  const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const getResult = (playerMove: string, computerMove: string) => {
    if (playerMove === computerMove) {
      setVerdict("It's a tie!");
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      setVerdict("You win!");
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem("score", newScore.toString());
    } else {
      setVerdict("You lose!");
      const newScore = score - 1;
      setScore(newScore);
      localStorage.setItem("score", newScore.toString());
    }
  };

  const resetGame = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setVerdict(null);
  };

  return (
    <div className=" flex flex-col min-h-screen w-screen">
      <div className="flex justify-center text-white mt-14 h-1/3">
        <ScoreCard score={score} />
      </div>

      <div className="mt-24 flex-grow mobile:scale-75 sm:scale-100 w-full flex justify-center">
        {playerMove === null ? (
          <Container handleMoveClick={handleMoveClick} />
        ) : (
          <div className="mobile:scale-50 sm:scale-75">
            <Result
              playerMove={playerMove}
              computerMove={computerMove}
              verdict={verdict}
              resetGame={resetGame}
            />
          </div>
        )}
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Home;