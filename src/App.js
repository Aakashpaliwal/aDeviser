import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Pageone } from "./Components/Pageone/Pageone";
import { Pagetwo } from "./Components/Pagetwo/Pagetwo";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Route path="/" exact component={Home} />
      <Route path="/Pageone" exact component={Pageone} />
      <Route path="/Pagetwo" exact component={Pagetwo} />
    </div>
  );
}

export default App;
