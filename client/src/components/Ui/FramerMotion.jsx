import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export function FadeInOut(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    />
  );
}

export function StaggerChildren(props) {
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, delay: 0.2 } },
  };
  return (
    <motion.div initial='hidden' animate='show' variants={variant} {...props} />
  );
}

export function FramerButton(props) {
  const variant = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.8 },
    },
  };

  return (
    <Button
      initial='initial'
      whileHover='hover'
      variants={variant}
      {...props}
    />
  );
}
