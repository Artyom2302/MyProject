import {Component, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {user} from "./Components/authorise/authorise.component";
import {compass, logIn} from "ionicons/icons";
import {HTTPInterceptorService} from "../services/httpinterceptor.service";
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
  authorise:boolean=false;
  id:number=0;
  login:string="";
  token:string="";
  constructor(private tokenService :TokenService) {
  }
  logUser(user:any) {
    this.login=user.login;
    this.id=user.id;
    this.token=user.token;
    this.authorise=true;
    this.tokenService.setToken(user.token);
  }
}
