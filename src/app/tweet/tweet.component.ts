import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase,FirebaseListObservable } from "angularfire2/database";

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public user:string="";
  arr:FirebaseListObservable<any[]>;
  constructor(public af:AngularFireAuth,public router:Router,public db:AngularFireDatabase) { 
  af.authState.subscribe(auth=>{
    if(auth)
    {
      this.user=auth.email.toString();
      console.log(auth.email);
    }
    else{
      router.navigate(['login']);
    }
  })
 this.arr =this.db.list('/');
}
logout()
{
  this.af.auth.signOut();
}
add(f)
{
  this.arr.push({text:f.value,createdAt:new Date().toString(),likes:0,user:this.user});
}
remove($key:string)
{
this.arr.remove($key);}
  ngOnInit() {
  }
like($key:string,count:number)
{
this.arr.update($key,{likes:count+1});}
 
}
