import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className='w-full text-gray-800 py-2 px-4 hover:bg-yellow-600 hover:text-white bg-yellow-500 rounded-md text-lg font-bold'>
      {props.children}
    </button>
  );
});

export default Button;
