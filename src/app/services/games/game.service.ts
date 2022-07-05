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
  API: string = 'https://api-labs.tindin.com.br'
  constructor(private http: HttpClient) {}

  listGames() {
    return this.http.get<ReqGETGames>(`${this.API}/games`);
  }

  getGameById(gameId: number) {
    return this.http.get(`${this.API}/games/${gameId}`);
  }

  addGame(data: Game){
    return this.http.post(`${this.API}/games`, data)
  }
}
