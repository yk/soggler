import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tournaments } from '../imports/collections';
import { Tournament } from '../imports/models';

Meteor.publish('tournaments', function(){
    return Tournaments.collection.find({});
});
