import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetComponent } from "./tweet/tweet.component";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: '',
   component:TweetComponent
  },
   {
    path: 'login',
   component: LoginComponent
  },
   {
    path: 'main',
   component: TweetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
