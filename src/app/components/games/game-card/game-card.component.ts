import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() _id: string = '';
  @Input() title: string = '';
  @Input() rating: number = 0;
  @Input() description: string = '';
  @Input() mediumPrice?: number = 0;
  @Input() genres?: string[] = [];
  @Input() photos?: Object[] = [];
  hasPhotos: boolean;
  constructor() {}

  ngOnInit(): void {
    this.hasPhotos = !!this.photos?.length;
  }
}
