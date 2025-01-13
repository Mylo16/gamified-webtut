import React, { useState } from "react";
import GameMap from "./components/GameMap";

const App = () => {
  const [currentRoom, setCurrentRoom] = useState(null);

  const handleEnterRoom = (roomName) => {
    setCurrentRoom(roomName);
  };

  return (
    <div>
      {currentRoom ? (
        <div>
          <h1>Welcome to the {currentRoom} Room!</h1>
          <p>Here you will learn all about {currentRoom}.</p>
          <button onClick={() => setCurrentRoom(null)}>Go Back</button>
        </div>
      ) : (
        <GameMap onEnterRoom={handleEnterRoom} />
      )}
    </div>
  );
};

export default App;
