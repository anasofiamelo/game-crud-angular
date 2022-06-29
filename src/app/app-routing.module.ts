import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/common/login-form/login-form.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesListComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'game/:gameId',
    component: GameDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
