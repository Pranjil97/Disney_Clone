import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import CategoryIcons from "./Components/CategoryIcons";
import DisplayContent from "./Components/DisplayContent";

function App() {
  const [tab, setTab] = useState(false)
  return (
    <div className="App">
      {tab ?
        <><Navbar tab={tab} settab={setTab} />
          <Home />
          <CategoryIcons />
          <DisplayContent /></>
        : <LandingPage tab={tab} settab={setTab} />}

    </div>
  );
}

export default App;
