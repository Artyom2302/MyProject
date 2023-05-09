import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {user} from "./Components/authorise/authorise.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  authorise:boolean=true;
  id:number=1;
  login:string="user1";
  logUser(user:any) {
    this.id=user.id;
    this.login=user.login;
    this.authorise=true;
  }
}
