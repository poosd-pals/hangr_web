import { AuthService } from './auth/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClosetModule } from  './closet/closet.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClosetComponent } from './closet/closet.component';
import { HamperComponent } from './hamper/hamper.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

var config = {
  apiKey: "AIzaSyAkG4QmO8X_pWBBw4tQv6z_ad-3-Z_tKyc",
  authDomain: "hangr-233113.firebaseapp.com",
  databaseURL: "https://hangr-233113.firebaseio.com",
  projectId: "hangr-233113",
  storageBucket: "hangr-233113.appspot.com",
  messagingSenderId: "592709060474"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    HomeComponent,
    ClosetComponent,
    HamperComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    ClosetModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
