import React from "react";
import "../../css/TripCard.css";
import { motion } from "framer-motion";

const CardVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  hover: {
    scale: 1.05,
  },
};

export default function TripCard({ name, rooms, bathrooms, capacity, img }) {
  return (
    <motion.div
      variants={CardVariants}
      initial='hidden'
      animate='show'
      whileHover='hover'
      className='mx-auto my-2 p-2 max-w-xl h-64 rounded-md shadow-md flex hoverEffect cursor-pointer'>
      <div className='h-full w-64 my-auto'>
        <div className='relative pb-56 rounded-md divide-x mr-4 flex'>
          <img
            src={img}
            alt='HouseImage'
            className='absolute inset-0 object w-full h-full'
          />
        </div>
      </div>
      <div className='flex flex-col text-left'>
        <h1 className='text-xl block font-bold text-capitalize'> {name}</h1>

        <div className='text-gray-700 font-light text-md flex'>
          <div style={{ width: "20px" }} className='mr-2'>
            <i className='fas fa-bed' />
          </div>
          Rooms: {rooms}{" "}
        </div>

        <div className='text-gray-700 font-light text-md flex'>
          <div
            style={{ width: "20px" }}
            className='mr-2 flex justify-center items-center  '>
            <i className='fas fa-toilet' />
          </div>
          Bathrooms: {bathrooms}{" "}
        </div>

        <div className='text-gray-700 font-light text-md flex'>
          <div style={{ width: "20px" }} className='mr-2'>
            <i className='fas fa-user-friends' />
          </div>
          Capacity: {capacity}
        </div>
      </div>
    </motion.div>
  );
}
