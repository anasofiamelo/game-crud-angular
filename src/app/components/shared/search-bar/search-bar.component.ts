import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleSearchBarOnRoutes () {
    const url = this.router.url
    if(url.includes('games') || url.includes('login')) {
      return false
    }
    return true
  }
}
