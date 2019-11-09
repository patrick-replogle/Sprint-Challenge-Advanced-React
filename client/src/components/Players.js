import React from "react";
import PlayersCard from "./PlayersCard";

const Players = props => {
  return (
    <div className="playersContainer">
      {props.players.map(player => {
        return <PlayersCard player={player} key={player.id} />;
      })}
    </div>
  );
};

export default Players;
