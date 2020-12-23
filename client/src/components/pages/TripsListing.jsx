import React, { useState, useContext, useEffect } from "react";
import { TripContext } from "../context/TripsContext";
import TripCard from "../Ui/TripCard";
import { FadeInOut, StaggerChildren } from "../Ui/FramerMotion";
import Button from "../Ui/Button";
import { Link } from "react-router-dom";

export default function TripsListing() {
  const { currentTrips } = useContext(TripContext);

  const [displayedTrips, setDisplayedTrips] = useState(currentTrips);
  const [searchValue, setSearchValue] = useState("");

  const searchByName = (regex) => {
    const rgx = new RegExp(regex, "i");
    const filteredArray = [...currentTrips].filter((elem) =>
      rgx.test(elem.name)
    );
    setDisplayedTrips(filteredArray);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // eslint-disable-next-line
  useEffect(() => searchByName(searchValue), [searchValue]);

  return (
    <FadeInOut className='pt-20'>
      <form
        className='flex max-w-lg my-10 mx-auto h-10 items-center'
        onSubmit={(e) => e.preventDefault()}>
        <input
          className='h-full px-12 block rounded my-4 mx-auto outline-none'
          placeholder='Search'
          type='text'
          value={searchValue}
          onChange={handleChange}
          onKeyDown={(e) =>
            e.key === "Enter" ? searchByName(searchValue) : null
          }
        />
        <Button onClick={() => searchByName(searchValue)}>Search</Button>
        <Link to='/trips/add'>
          <Button className='bg-dark'>Add Trip</Button>
        </Link>
      </form>

      <StaggerChildren className='mx-auto w-3/4 py-2 bg-dark-ligth rounded shadow-md'>
        {currentTrips &&
        Array.isArray(currentTrips) &&
        displayedTrips.length > 0 ? (
          displayedTrips.map((trip) => <TripCard key={trip._id} {...trip} />)
        ) : (
          <h2 className='text-3x1 text-center block p-20'>Nothing found</h2>
        )}
      </StaggerChildren>
    </FadeInOut>
  );
}
