import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Tournaments } from '../imports/collections';
import { Tournament, Team, Game } from '../imports/models';

Meteor.startup(() => {
    if(Tournaments.collection.find().count() == 0){
        let tournaments = <Tournament[]>[
            <Tournament>{
                '_id': '0',
                name: 'Gruppe A',
                teams: [
                    <Team>{
                        '_id': 't1',
                        'name': 'Team 1',
                    },
                    <Team>{
                        '_id': 't2',
                        'name': 'Team 2',
                    },
                ],
                games: <Game[]>[
                ],
            },
        ];

        for (let trn of tournaments) {
            console.log(trn);
            Tournaments.collection.insert(trn);
        }
    }
});
