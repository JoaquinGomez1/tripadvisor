import React, { createContext, useState } from "react";

export const UserProvider = createContext();

export default function UserContext(props) {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserProvider.Provider {...props} value={{ currentUser, setCurrentUser }} />
  );
}
