import React from 'react';
import pacman from '../images/pacman.png';

function Board() {
  return(
  <div className="board flex flex-wrap bg-black">
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="flex object-contain square w-1/5 h-10 border-gray-900 border-solid border-2 text-center">
        <img id="pacman" alt="pacman" src={ pacman } />
      </div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
      <div className="square w-1/5 h-10 border-gray-900 border-solid border-2 text-center"></div>
  </div>
  )
}

export default Board;