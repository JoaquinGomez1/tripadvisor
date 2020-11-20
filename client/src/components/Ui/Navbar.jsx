import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='flex fixed justify-between bg-black w-full h-20  py-2 text-white'>
      <div className='m-auto'>
        <h1 className='text-lg font-bold cursor-pointer hover:border-red-600'>
          Navbar
        </h1>
      </div>
      <div className='m-auto'>
        <ul className='flex items-center'>
          <Link to='/about'>
            <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-red-600'>
              About
            </li>
          </Link>
          <Link to='/signin'>
            <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-red-600'>
              Sign In
            </li>
          </Link>
          <Link to='/signup'>
            <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-red-600'>
              Sign Up
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
