import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Shayna',
  score: 99
}, {
  _id: '2',
  name: 'Brian',
  score: -1
}, {
  _id: '3',
  name: 'Rob',
  score: 15
}];

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function() {
  let name = 'Rob';
  let title = 'foo';
  let jsx = (
    <div>
      {/* Render h1 tag with text */}
      <h1>{title}</h1>
      <p>Hello {name}</p>
      <p>This is a second p</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
