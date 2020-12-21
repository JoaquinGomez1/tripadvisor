import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import "../../css/Navbar.css";

export default function Navbar() {
  const links = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/signin", mustBeLoggedIn: false },
    { name: "Sign Up", url: "/signup", mustBeLoggedIn: false },
    { name: "Trips", url: "/trips" },
    { name: "Profile", url: "/user", mustBeLoggedIn: true },
  ];
  const { currentUser } = useContext(UserProvider);
  const userIsLoggedIn = currentUser && Object.keys(currentUser).length >= 1;

  return (
    <div className='navbar flex w-full justify-between fixed bg-dark text-light z-20 h-20 px-20 py-2 shadow-md'>
      <div className='m-auto'>
        <Link to='/'>
          <h1 className='text-lg font-bold cursor-pointer text-blue-800'>
            Navbar
          </h1>
        </Link>
      </div>
      <div className='m-auto'>
        <ul className='flex items-center '>
          {links.map((each) => {
            // Logged in view
            if (userIsLoggedIn && each.mustBeLoggedIn !== false) {
              return (
                <Link to={each.url} key={each.url}>
                  <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-red'>
                    {each.name}
                  </li>
                </Link>
              );
            }

            // Not logged in view
            if (!userIsLoggedIn && each.mustBeLoggedIn !== true) {
              return (
                <Link to={each.url} key={each.url}>
                  <li className='my-auto mx-2 cursor-pointer transform hover:scale-110 hover:text-red'>
                    {each.name}
                  </li>
                </Link>
              );
            }

            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
