import React, { createContext, useState } from "react";

export const TripContext = createContext();

export default function Context(props) {
  const [currentTrips, setCurrentTrips] = useState([
    {
      _id: "asdasd1a2sdd",
      name: "Hotel room in Toronto",
      rooms: 1,
      capacity: 3,
      bathrooms: 2,
      img:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
    },
    {
      _id: "asdasd1a2sd23",
      name: "Apartment in Vancouver",
      rooms: 1,
      capacity: 3,
      bathrooms: 2,
      img:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
    },
    {
      _id: "asdas4353d1a2sd",
      name: "Vancouver",
      rooms: 1,
      capacity: 3,
      bathrooms: 2,
      img:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
    },
    {
      _id: "asdasd16a2sd",
      name: "Hotel room in Vancouver",
      rooms: 1,
      capacity: 3,
      bathrooms: 2,
      img:
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
    },
  ]);

  return (
    <TripContext.Provider
      {...props}
      value={{ currentTrips, setCurrentTrips }}
    />
  );
}
