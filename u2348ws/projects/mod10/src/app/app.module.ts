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
import { GoogleLoginProvider,  GoogleSigninButtonModule,  SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import localeZH from "@angular/common/locales/zh";
import localefr from "@angular/common/locales/fr";
import localede from "@angular/common/locales/de";
import { registerLocaleData } from '@angular/common';

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
    AppRoutingModule, FormsModule, 
    SocialLoginModule, GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '809783411557-l600unv6an2i6nob5fqntc8kqide08a8.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeZH, "zh");
registerLocaleData(localefr, "fr");
registerLocaleData(localede, "de");