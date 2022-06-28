import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { EmitterComponent } from './emitter/emitter/emitter.component';

@NgModule({
  declarations: [AppComponent, ChangeNumberComponent, EmitterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
