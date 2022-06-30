import { Component, OnInit } from '@angular/core';

import { Game } from '../../../interfaces/Game';
import { GameService } from '../../../services/games/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.listGames().subscribe((res) => {
      console.log(res.games);
      this.games = res.games;
    });
  }
}
