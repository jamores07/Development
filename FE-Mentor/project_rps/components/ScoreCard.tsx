"use client";

import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg';

interface ScoreCardProps {
  score: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score }) => {
  return (
    <div className="inline-block">
      <div className="border-2 border-gray-400 rounded-3xl px-8 py-6 flex justify-between items-center gap-14 md:gap-40">
        <Image 
          src={logo} 
          alt="logo" 
          priority 
          width={100} 
          height={100} 
        />
        <div className="w-[150px] bg-white rounded-lg flex justify-center items-center flex-col py-3">
          <p className="text-[#2a46c0] text-lg">SCORE</p>
          <p className="text-[#3b4363] text-6xl font-bold">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;