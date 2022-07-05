import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService } from './../../../services/games/game.service';
import { Game } from '../../../interfaces/Game'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  game: Game
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params['gameId'];
    this.gameService.getGameById(gameId).subscribe((res: any) => {
      console.log(res.game)
      this.game = res.game
      if(!res.game.mainPhoto){
        this.game['mainPhoto'] = res.game.photos[0]
      }
    });
  }
}
