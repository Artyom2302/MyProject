import {Component, EventEmitter, Injectable, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthoriseService} from "../../../services/authorise.service";

export type user={login:"",password:""};
@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.css']
})

export class AuthoriseComponent {

  showLoginBlock:boolean=true;
  aggrement:boolean=false;
  responce:any;
  @Output() loginUser = new EventEmitter<user>();
  formLogin: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  formRegister: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    passwordAgain:new FormControl('')
  });


  constructor(private loginService: AuthoriseService) {
  }
  loginServer():Promise<any>{
     return (this.loginService.Authorise(this.formLogin?.get("login")?.value,this.formLogin?.get("password")?.value));
  }

  async submitLogin() {
    let loginServer = await this.loginServer();
    if (loginServer=="Not found"){
      alert("User does not exist, create account");
    }
    else if(loginServer=="Wrong password") {
      alert("Wrong password, try again");
    }
    else {
      this.loginUser.emit(this.formLogin.value);
      console.log(this.formLogin.value);
    }
  }

  submitRegister() {
    if (this.formRegister.get("password")?.value!=this.formRegister.get("passwordAgain")?.value){
      alert("Password don't match each other, try again!!!");
    }
    else if(!this.aggrement){
      alert("You don't agree with the statement");
    }
    else{
      this.loginService.Register(this.formRegister.get("login")?.value,this.formRegister.get("password")?.value);
    }

  }

}
