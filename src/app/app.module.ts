import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { TweetComponent } from './tweet/tweet.component';
export const firebaseconfig={
    apiKey: "AIzaSyBhSn4MAKckYYL9WMZYd3Q7CgLA4uQDbEA",
    authDomain: "ng-demo-aa1f6.firebaseapp.com",
    databaseURL: "https://ng-demo-aa1f6.firebaseio.com",
    projectId: "ng-demo-aa1f6",
    storageBucket: "ng-demo-aa1f6.appspot.com",
    messagingSenderId: "18889275726"
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseconfig)
    
  ],
  providers: [AngularFireAuth,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
