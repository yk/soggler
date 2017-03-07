import { Meteor } from 'meteor/meteor';

export interface Tournament {
  _id?: string;
  name?: string;
  teams: Team[];
  games: Game[];
}

export interface Game {
  _id?: string;
  team1?: string;
  team2?: string;
  score1?: number;
  score2?: number;
  played?: boolean;
}

export interface Team {
  _id?: string;
  name?: string;
}
