import React, { useState, useContext } from "react";
import { TripContext } from "../context/TripsContext";
import TripCard from "../Ui/TripCard";

export default function TripsListing() {
  const { currentTrips } = useContext(TripContext);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <input
        className='px-12 py-4 bg-gray-300 rounded my-4 outline-none'
        placeholder='Search'
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {currentTrips &&
        Array.isArray(currentTrips) &&
        currentTrips.map((trip) => <TripCard key={trip._id} {...trip} />)}
    </div>
  );
}
