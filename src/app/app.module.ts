import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {
  apiKey: "AIzaSyBuiIyFEv8UfY0ZidxdjEf1qcYjs_L6Zpo",
  authDomain: "apirest-23fde.firebaseapp.com",
  databaseURL: "https://apirest-23fde-default-rtdb.firebaseio.com",
  projectId: "apirest-23fde",
  storageBucket: "apirest-23fde.appspot.com",
  messagingSenderId: "947245669600",
  appId: "1:947245669600:web:8ac4bf14dce2295bbfc485",
  measurementId: "G-YJE5E53T7B"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
