import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

interface Photo {
  name?: string;
  url?: string;
  _id?: string;
}

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() id?: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating?: number;
  @Input() mediumPrice?: number = 0;
  @Input() genres?: string[] = [];
  @Input() photos?: Photo[] = [];
  @Input() mainPhoto?: Photo;

  hasPhotos: boolean;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.hasPhotos = !!this.photos?.length;
  }

  gotoGameDetails(id?: string) {
    this.route.navigateByUrl(`/game/${id}`)
  }
}
