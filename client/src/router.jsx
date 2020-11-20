import React from "react";
import { BrowserRouter as BRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/Ui/Navbar";

export default function Router() {
  return (
    <BRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
      </Switch>
    </BRouter>
  );
}
