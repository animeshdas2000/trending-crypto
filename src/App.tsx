import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import trending from "./assets/trending.svg";
function App() {
  return (
    <div className="App">
      <div className="header">
        {" "}
        <img src={trending} alt="" />
        <h2>Trending Assets</h2>
      </div>

      <Card />
    </div>
  );
}

export default App;

