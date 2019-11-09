import React from "react";

const PlayersCard = props => {
  return (
    <div className="playersCard">
      <h3>Name: {props.player.name}</h3>
      <p>Country: {props.player.country}</p>
      <p>Searches: {props.player.searches}</p>
    </div>
  );
};

export default PlayersCard;
