import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => {
          Players.update(player._id, {
            $inc: {
              score: 1
            }
          })
        }}>+1</button>
        <button onClick={() => {
          Players.update(player._id, {
            $inc: {
              score: -1
            }
          })
        }}>-1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
}

Meteor.startup(() => {
  // Call Tracker.autorun
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Rob';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
