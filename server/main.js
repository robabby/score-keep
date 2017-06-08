import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
  Players.insert({
    name: 'Shayna',
    score: 5
  });
  console.log(Players.find().fetch());
});
