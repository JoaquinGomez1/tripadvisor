import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "../context/UserContext";

export default function Navbar() {
  const links = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/signin", mustBeLoggedIn: false },
    { name: "Sign Up", url: "/signup", mustBeLoggedIn: false },
    { name: "Trips", url: "/trips" },
    { name: "Profile", url: "/user", mustBeLoggedIn: true },
  ];
  const { currentUser } = useContext(UserProvider);
  const userIsLoggedIn = Object.keys(currentUser).length >= 1;

  return (
    <div className='flex fixed justify-between bg-black z-20 w-full h-20 py-2 text-white mb-20'>
      <div className='m-auto'>
        <h1 className='text-lg font-bold cursor-pointer'>Navbar</h1>
      </div>
      <div className='m-auto'>
        <ul className='flex items-center'>
          {links.map((each) => {
            // Logged in view
            if (userIsLoggedIn && each.mustBeLoggedIn !== false) {
              return (
                <Link to={each.url} key={each.url}>
                  <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-yellow-600'>
                    {each.name}
                  </li>
                </Link>
              );
            }

            // Not logged in view
            if (!userIsLoggedIn && each.mustBeLoggedIn !== true) {
              return (
                <Link to={each.url} key={each.url}>
                  <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-yellow-600'>
                    {each.name}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
