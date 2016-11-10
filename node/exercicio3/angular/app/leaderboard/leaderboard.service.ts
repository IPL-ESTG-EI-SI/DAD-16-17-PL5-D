import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { LeaderboardPlayer } from './leaderboard-player';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LeaderboardService{

    leaderboard:  LeaderboardPlayer[] = [];

    constructor(private http: Http){}

    getLearderboard():Observable<LeaderboardPlayer[]>{

        return this.http.get('/api/leaderboard')
                .map((response) => this.leaderboard = response.json());

    }

}

