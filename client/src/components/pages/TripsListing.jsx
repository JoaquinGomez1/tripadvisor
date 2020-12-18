import React, { useState, useContext } from "react";
import { TripContext } from "../context/TripsContext";
import TripCard from "../Ui/TripCard";
import { FadeInOut, StaggerChildren } from "../Ui/FramerMotion";

export default function TripsListing() {
  const { currentTrips } = useContext(TripContext);

  const [displayedTrips, setDisplayedTrips] = useState(currentTrips);
  const [searchValue, setSearchValue] = useState("");

  const searchByName = (regex) => {
    const rgx = new RegExp(regex, "i");
    setDisplayedTrips([...currentTrips].filter((elem) => rgx.test(elem.name)));
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") setDisplayedTrips(currentTrips);
  };

  return (
    <FadeInOut className='pt-20'>
      <input
        className='px-12 py-4 bg-gray-300 block rounded my-4 mx-auto outline-none'
        placeholder='Search'
        type='text'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={(e) =>
          e.key === "Enter" ? searchByName(searchValue) : null
        }
      />

      <StaggerChildren>
        {currentTrips &&
          Array.isArray(currentTrips) &&
          displayedTrips.map((trip) => <TripCard key={trip._id} {...trip} />)}
      </StaggerChildren>
    </FadeInOut>
  );
}
