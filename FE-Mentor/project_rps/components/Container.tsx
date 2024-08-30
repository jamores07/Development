// Container.tsx
import React from "react";
import Rock from "@/components/Rock";
import Paper from "@/components/Paper";
import Scissors from "@/components/Scissors";
import Image from "next/image";

const Container: React.FC<{
  handleMoveClick: (move: string) => void;
}> = ({ handleMoveClick }) => {
  return (
    <div className="w-[450px] h-[450px] relative">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -z-10">
        <Image src={require(`@/public/assets/bg-triangle.svg`)} alt="triangle" />
      </div>
      <div
        className="absolute top-0 left-[20%]  transform -translate-x-1/2"
        onClick={() => handleMoveClick("paper")}
      >
        <Paper />
      </div>

      <div
        className="absolute top-0 right-[20%] transform translate-x-1/2"
        onClick={() => handleMoveClick("scissors")}
      >
        <Scissors />
      </div>
      <div
        className="absolute bottom-20  left-1/2 transform -translate-x-1/2"
        onClick={() => handleMoveClick("rock")}
      >
        <Rock />
      </div>
    </div>
  );
};

export default Container;
