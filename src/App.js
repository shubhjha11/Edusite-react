import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar"
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route path = "/About" component={About} />
      <Route path = "/Services" component={Services} />
      <Route path = "/Contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
      
    </>
  );
};
export default App;