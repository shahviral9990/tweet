import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af:AngularFireAuth,public router:Router) { }

  ngOnInit() {
  }
signup(form)
{
  this.af.auth.createUserWithEmailAndPassword(form.value.email,form.value.password).then(  function()
  {});
  form.reset();
}
login(form)
{
   this.af.auth.signInWithEmailAndPassword(form.value.email,form.value.password).then(function(confirmationResult) {
     console.log("logged");
  //   this.router.Navigate(['main']);
    });

}
}
