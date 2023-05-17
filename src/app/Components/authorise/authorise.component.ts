import {Component, EventEmitter, Injectable, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthoriseService} from "../../../services/authorise.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export type user={id:0,login:"",password:""};
@Component({
  selector: 'app-authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.css']
})

export class AuthoriseComponent {

  showLoginBlock:boolean=true;
  aggrement:boolean=false;
  responce:any;
  @Output() loginUser = new EventEmitter<any>();
  formLogin: FormGroup = new FormGroup({
    login: new FormControl('',[ Validators.required]),
    password: new FormControl('',[ Validators.required])
  });
  formRegister: FormGroup = new FormGroup({
    login: new FormControl('',[ Validators.required]),
    password: new FormControl('',[ Validators.required]),
    passwordAgain:new FormControl('',[ Validators.required])
  });


  constructor(private loginService: AuthoriseService,private snackBar: MatSnackBar) {
  }
  loginServer():Promise<any>{
     return (this.loginService.Authorise(this.formLogin?.get("login")?.value,this.formLogin?.get("password")?.value));
  }

  async submitLogin() {
    let loginServer = await this.loginServer();
    if (loginServer==-1){
      this.snackBar.open('User does not exist or wrong password', 'Close', {duration: 3000,verticalPosition: 'top'});
    }
    else {
      let value={login:this.formLogin?.get("login")?.value, id:loginServer.id,token:loginServer.token.token}
      this.loginUser.emit(value);
      console.log(value);
    }
  }

  submitRegister() {
    if (this.formRegister.get("password")?.value!=this.formRegister.get("passwordAgain")?.value){
      alert();
      this.snackBar.open("Password don't match each other, try again!!!", 'Close', {duration: 3000,verticalPosition: 'top'});

    }
    else if(!this.aggrement){
      this.snackBar.open("You don't agree with the statement", 'Close', {duration: 3000,verticalPosition: 'top'});
    }
    else{
      this.loginService.Register(this.formRegister.get("login")?.value,this.formRegister.get("password")?.value);
    }

  }

}
