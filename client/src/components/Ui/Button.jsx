import React from "react";
import { motion } from "framer-motion";

const Button = React.forwardRef((props, ref) => {
  return (
    <motion.button
      ref={ref}
      {...props}
      className={
        props.className +
        "w-full py-2 px-4 hover:text-light bg-red rounded-md text-lg text-white"
      }>
      {props.children}
    </motion.button>
  );
});

export default Button;
