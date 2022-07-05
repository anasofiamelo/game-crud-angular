import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFormComponent } from './components/games/game-form/game-form.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameCardComponent } from './components/games/game-card/game-card.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginFormComponent } from './components/common/login-form/login-form.component';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AddHeaderInterceptor } from './services/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    GamesListComponent,
    GameCardComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    LoginFormComponent,
    GameDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
