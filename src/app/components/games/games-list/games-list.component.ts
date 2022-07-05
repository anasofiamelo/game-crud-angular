import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../../interfaces/Game';
import { GameService } from '../../../services/games/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];

  constructor(private route: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.listGames().subscribe((res) => {
      // const oi: Game[] = res.games.map((game) => {
      //   game['mainPhoto'] = game.photos?[0]
      //   return game
      // })

      this.games = res.games;
    });
  }

  gotoNewGame() {
    this.route.navigateByUrl(`/add`)
  }
}
