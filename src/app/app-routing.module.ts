import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './components/games/games-list/games-list.component';
import { LoginFormComponent } from './components/common/login-form/login-form.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { GameFormComponent } from './components/games/game-form/game-form.component';

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
  {
    path: 'add',
    component: GameFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
