import React from "react";
import { Link } from "react-router-dom";
import Player from "../components/Player";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Gamified Learning</h1>
      <Player />
      <Link to="/stage/html">Start Learning HTML</Link>
    </div>
  );
};

export default HomePage;
