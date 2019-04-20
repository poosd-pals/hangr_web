import { Constants } from './constants/constants';
import { AuthService } from './auth/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClosetModule } from  './closet/closet.module';
import { MaterialModule } from './material.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
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
import { AboutComponent } from './about/about.component';
import { OutfitsComponent } from './outfits/outfits.component';

import { ClosetService } from './api/closet/closet.service';
import { ClothingService } from './api/clothing/clothing.service';
import { HamperService } from './api/hamper/hamper.service';
import { OutfitsService } from './api/outfits/outfits.service';

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
    OutfitsComponent,
    PagenotfoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ClosetModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
  	AuthService,
	ClosetService,
	ClothingService,
	HamperService,
	OutfitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
