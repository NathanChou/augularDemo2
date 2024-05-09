import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserNameComponent } from './auth/user-name/user-name.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    AdminPageComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    UserNameComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
