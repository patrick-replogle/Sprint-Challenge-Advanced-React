import React from "react";
import PlayersCard from "./PlayersCard";

const Players = ({ players }) => {
  return (
    <div className="playersContainer">
      {!players.isLoading ? (
        players
          .sort((a, b) => b.searches - a.searches)
          .map(player => {
            return <PlayersCard player={player} key={player.id} />;
          })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Players;
