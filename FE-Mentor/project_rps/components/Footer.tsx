import React from "react";
import Modal from "./Modal";

function Footer() {
  return (
    <footer className="relative w-screen ">
           <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
        <div className="border border-gray-600 rounded-full px-6 py-2 text-gray-300 text-sm bg-[#111827] cursor-pointer hover:text-white hover:border-white transition-colors duration-300">
          <Modal />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          Created By{" "}
          <a href="" className="text-white">
            John Amores
          </a>
        </p>
      </div>
      <div className="text-center text-sm text-gray-400 mt-2">
            © 2024 Rock Paper Scissors. All rights reserved.
          </div>

    </footer>
  );
}

export default Footer;
