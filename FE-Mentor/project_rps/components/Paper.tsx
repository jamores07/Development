import React from "react";
import Image from "next/image";

export default function Paper() {
  return (
    <div>
      <div className="paper-bg w-40 h-40 flex justify-center items-center p-6 cursor-pointer hover:scale-110 transition-all">
        <div className="bg-white w-full h-full rounded-full flex justify-center items-center text-black">
          <Image src={require(`@/public/assets/icon-paper.svg`)} alt="Paper"></Image>
        </div>
      </div>
    </div>
  );
}
