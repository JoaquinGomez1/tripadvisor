import React from "react";
import { BrowserRouter as BRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import TripsListing from "./components/pages/TripsListing";
import Navbar from "./components/Ui/Navbar";
import User from "./components/pages/User";

export default function Router() {
  return (
    <BRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/trips' component={TripsListing} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/user' component={User} />
      </Switch>
    </BRouter>
  );
}
