import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './../../interfaces/Game';

interface ReqGETGames {
  games: Game[];
  totalSize: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  listGames() {
    return this.http.get<ReqGETGames>('https://api-labs.tindin.com.br/games');
    // .subscribe((res) => {
    //   console.log(res.games);
    //   this.games = res.games;
    // });
  }

  getGameById(gameId: number) {
    return this.http.get(`https://api-labs.tindin.com.br/games/${gameId}`);
  }
}
