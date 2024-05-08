import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Mod03CompModule } from 'mod03-comp';
import { Mod03ServiceModule } from 'mod03-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod03CompModule,
    Mod03ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
