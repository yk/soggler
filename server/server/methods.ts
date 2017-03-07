import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Tournaments } from '../imports/collections';
import { Tournament } from '../imports/models';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
    createTournament(name: string): void {
        check(name, nonEmptyString);
        let nt : Tournament = {
            name: name,
            teams: [],
            games: [],
        };
        Tournaments.collection.insert(nt);
    },
});
