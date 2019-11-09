import React from "react";

const PlayersCard = ({ player }) => {
  return (
    <div className="playersCard">
      <h3>Name: {player.name}</h3>
      <p>Country: {player.country}</p>
      <p>Searches: {player.searches}</p>
      <p>ID: {player.id}</p>
    </div>
  );
};

export default PlayersCard;
