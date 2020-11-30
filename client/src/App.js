import React from "react";
import Router from "./router";
import UserContext from "./components/context/UserContext";
import TripsContext from "./components/context/TripsContext";

function App() {
  return (
    <div className='w-screen h-screen'>
      <TripsContext>
        <UserContext>
          <Router />
        </UserContext>
      </TripsContext>
    </div>
  );
}

export default App;
