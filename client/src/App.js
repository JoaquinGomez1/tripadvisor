import React from "react";
import Router from "./router";
import UserContext from "./components/context/UserContext";
import TripsContext from "./components/context/TripsContext";
import { BrowserRouter as BRouter } from "react-router-dom";

function App() {
  return (
    <div className='w-screen h-screen'>
      <TripsContext>
        <UserContext>
          <BRouter>
            <Router />
          </BRouter>
        </UserContext>
      </TripsContext>
    </div>
  );
}

export default App;
