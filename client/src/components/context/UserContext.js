import React, { createContext, useState, useLayoutEffect } from "react";
import fetchData from "../../helpers/FetchData";

export const UserProvider = createContext();

export default function UserContext(props) {
  const [currentUser, setCurrentUser] = useState({});

  useLayoutEffect(() => {
    fetchData("/user").then(({ req, res }) => {
      if (req.status === 200) setCurrentUser(res.user);
      return;
    });
  }, []);

  return (
    <UserProvider.Provider {...props} value={{ currentUser, setCurrentUser }} />
  );
}
