import React from "react";
import PlayersCard from "./PlayersCard";

const Players = ({ players }) => {
  return (
    <div className="playersContainer">
      {players.map(player => {
        return <PlayersCard player={player} key={player.id} />;
      })}
    </div>
  );
};

export default Players;
