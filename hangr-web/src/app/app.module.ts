import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ClosetComponent } from './closet/closet.component';
import { HamperComponent } from './hamper/hamper.component';

// firebase credentials
var config = {
  production: false,
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
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ClosetComponent,
    HamperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
