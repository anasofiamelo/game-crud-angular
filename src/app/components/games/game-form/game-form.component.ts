import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Game } from 'src/app/interfaces/Game';
import { GameService } from 'src/app/services/games/game.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  gameForm: FormGroup
  genres: string[] = ["Fight", "Sports", "Survival", "Horror", "RPG", "Fps",
  "Tps", "Platform", "Adventure", "Action", "Minigame", "Racing", "Strategy",
  "Musical", "Dance", "Simulator"]

  platforms: string[] = ["PS", "PS2", "PS3", "PS4", "PS5", "PSP", "XBOX",
  "XBOX 360", "XBOX ONE", "XBOX SERIES S", "XBOX SERIES X", "SUPER NINTENDO",
  "NINTENDO 64", "NINTENDO SWITCH", "NINTENDO WII", "NINTENDO DS", "NINTENDO 3DS",
  "MEGA DRIVE", "PC", "MOBILE"]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GameService,
    private tokenservice: TokenService
  ) {}

  ngOnInit(): void {
    if(!this.tokenservice.hasToken()){
      this.router.navigateByUrl('login')
    }

    this.gameForm = this.formBuilder.group({
      gameTags: [''],
      gameGenre: [null],
      gameResume: [''],
      gamePlatform: [null],
      gameMediumPrice: [''],
      gameReleaseYear: [''],
      gamePhotoLink: [''],
      gameTitle: ['', Validators.required],
      gameDescription: ['', Validators.required],
    });
  }

  addGame() {
    let photo: Photo =
    {
      name: "main",
      url: this.gameForm.get("gamePhotoLink")?.value
    }

    const data: Game = {
      title: this.gameForm.get('gameTitle')?.value,
      // resume: this.gameForm.get('gameResume')?.value,
      description: this.gameForm.get('gameDescription')?.value,
      // genres: [this.gameForm.get('gameGenres')?.value],
      // platforms: [this.gameForm.get('gamePlatforms')?.value],
      // mediumPrice: this.gameForm.get('gameMediumPrice')?.value,
      // releaseYear: this.gameForm.get('gameReleaseYear')?.value,
      // studio: this.gameForm.get('gameStudio')?.value,
      // company: this.gameForm.get('gameCompany')?.value,
      photos: [photo]
    }

    console.log(data)

    this.gameService.addGame(data).subscribe(() => alert('Game registrado'), (e) => console.log(e))
  }

}
