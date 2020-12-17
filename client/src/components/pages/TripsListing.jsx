import React, { useState, useContext } from "react";
import { TripContext } from "../context/TripsContext";
import TripCard from "../Ui/TripCard";
import { FadeInOut, StaggerChildren } from "../Ui/FramerMotion";

export default function TripsListing() {
  const { currentTrips } = useContext(TripContext);
  const [searchValue, setSearchValue] = useState("");

  return (
    <FadeInOut className='pt-20'>
      <input
        className='px-12 py-4 bg-gray-300 block rounded my-4 mx-auto outline-none'
        placeholder='Search'
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {currentTrips && Array.isArray(currentTrips) && (
        <StaggerChildren>
          {currentTrips.map((trip) => (
            <FadeInOut>
              <TripCard key={trip._id} {...trip} />
            </FadeInOut>
          ))}
        </StaggerChildren>
      )}
    </FadeInOut>
  );
}
