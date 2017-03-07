import { MongoObservable } from 'meteor-rxjs';
import { Tournament } from '../models';

export const Tournaments = new MongoObservable.Collection<Tournament>('tournaments');
