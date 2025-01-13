import React, { useEffect, useState } from "react";
import GameMap from "./GameMap";

const Player = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyPress = (e) => {
    setPosition((prev) => {
      switch (e.key) {
        case "ArrowUp":
          return { ...prev, y: Math.max(0, prev.y - 1) };
        case "ArrowDown":
          return { ...prev, y: Math.min(4, prev.y + 1) };
        case "ArrowLeft":
          return { ...prev, x: Math.max(0, prev.x - 1) };
        case "ArrowRight":
          return { ...prev, x: Math.min(4, prev.x + 1) };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div>
      <h1>Player Position: ({position.x}, {position.y})</h1>
      <GameMap playerPosition={position} />
    </div>
  );
};

export default Player;
