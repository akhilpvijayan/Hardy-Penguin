import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDJq8-G4NgQUgA9CnOD-pgQWdzNKhgN-fo",
      authDomain: "hardypenguin-25b26.firebaseapp.com",
      projectId: "hardypenguin-25b26",
      storageBucket: "hardypenguin-25b26.appspot.com",
      messagingSenderId: "381177177842",
      appId: "1:381177177842:web:d3993f996931f4f0a1526b"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
