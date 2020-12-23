import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      className='w-full bg-gray-300 p-2 rounded-md mb-2 placeholder-gray-600'
    />
  );
}
