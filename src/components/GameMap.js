import React, { useState } from "react";
import "../css/GameMap.css";

const GameMap = ({ onEnterRoom }) => {
  const [playerPosition, setPlayerPosition] = useState({ x: 2, y: 2 });

  // Map houses to room names
  const houseRooms = {
    "1-1": "HTML & CSS",
    "1-3": "JavaScript",
    "3-1": "React",
    "3-3": "GitHub",
  };

  const grid = [
    ["road", "road", "road", "road", "road"],
    ["road", "house", "road", "house", "road"],
    ["road", "road", "player", "road", "road"],
    ["road", "house", "road", "house", "road"],
    ["road", "road", "road", "road", "road"],
  ];

  const movePlayer = (direction) => {
    const { x, y } = playerPosition;
    let newX = x,
      newY = y;

    switch (direction) {
      case "up":
        newX = Math.max(0, x - 1);
        break;
      case "down":
        newX = Math.min(grid.length - 1, x + 1);
        break;
      case "left":
        newY = Math.max(0, y - 1);
        break;
      case "right":
        newY = Math.min(grid[0].length - 1, y + 1);
        break;
      default:
        break;
    }

    const nextTile = grid[newX][newY];
    if (nextTile === "road" || nextTile === "house") {
      setPlayerPosition({ x: newX, y: newY });
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        movePlayer("up");
        break;
      case "ArrowDown":
        movePlayer("down");
        break;
      case "ArrowLeft":
        movePlayer("left");
        break;
      case "ArrowRight":
        movePlayer("right");
        break;
      case "Enter":
        const positionKey = `${playerPosition.x}-${playerPosition.y}`;
        if (houseRooms[positionKey]) {
          onEnterRoom(houseRooms[positionKey]);
        }
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition]);

  return (
    <div className="game-map">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((tile, colIndex) => {
            const isPlayer =
              rowIndex === playerPosition.x && colIndex === playerPosition.y;
            const positionKey = `${rowIndex}-${colIndex}`;
            return (
              <div
                className={`tile ${tile} ${isPlayer ? "player" : ""}`}
                key={positionKey}
              >
                {tile === "house" && !isPlayer && "🏠"}
                {isPlayer && "🕹️"}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameMap;
