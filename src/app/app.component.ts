import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = this.loader.loadingObservable
  constructor(public loader: LoadingService) {}

  ngOnInit(): void {}
}
