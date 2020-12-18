import React from "react";
import { motion } from "framer-motion";

const Button = React.forwardRef((props, ref) => {
  return (
    <motion.button
      ref={ref}
      {...props}
      className='w-full text-gray-800 py-2 px-4 hover:bg-yellow-600 hover:text-white bg-yellow-500 rounded-md text-lg font-bold'>
      {props.children}
    </motion.button>
  );
});

export default Button;
