import { GameService } from './../../../services/games/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params['gameId'];
    this.gameService.getGameById(gameId).subscribe((res) => console.log(res));
  }
}
