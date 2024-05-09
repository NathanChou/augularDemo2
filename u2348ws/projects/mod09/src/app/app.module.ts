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
import { GoogleSigninButtonModule, SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

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
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('643301899084-pb4q5e3cf19tkhua8l593qltiq773e6o.apps.googleusercontent.com')
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
