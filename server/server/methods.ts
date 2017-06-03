import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { Tournaments } from '../imports/collections';
import { Tournament } from '../imports/models';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({
    createTournament(tournament: any): void {
        let name = tournament.name;
        check(name, nonEmptyString);
        let teams = [];
        for (let t=0; t<tournament.teams.length; t++){
            if(!tournament.teams[t].name)
                continue;
            teams.push({
                '_id': tournament.teams[t]._id,
                name: tournament.teams[t].name,
            });
        }
        console.log(tournament);
        console.log(teams);
        let nt : Tournament = {
            name: name,
            teams: teams,
            games: [],
        };
        let id = Tournaments.collection.insert(nt);
        return id;
    },
});
