import React from "react";
import "../../css/TripCard.css";

export default function TripCard({ name, rooms, bathrooms, capacity, img }) {
  return (
    <div className='mx-auto my-2 p-2 max-w-xl h-64 rounded-md shadow-md flex hoverEffect cursor-pointer'>
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
    </div>
  );
}
