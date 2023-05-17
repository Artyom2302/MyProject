import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {URL_USER} from "../app/common/url";
import {MatSnackBar} from "@angular/material/snack-bar";






@Injectable({
  providedIn: 'root'
})
export class AuthoriseService {

  constructor(private http :HttpClient,private _snackBar: MatSnackBar) { }

  async Authorise(login:string, password:string):Promise<any> {
    let response = await lastValueFrom(this.http.get<any>(URL_USER+"/Authorise?login="+login+"&password="+password)).catch((_:any) => null);
    if (response==null){
      return -1;
    }
    else{
      return response;
    }
  }



  async Register(login:string,password:string) {
    // console.log(login);
    // console.log(password);
    // console.log(URL_USER);

    let resp =  await lastValueFrom( this.http.post(URL_USER, {
      "login": login,
      "password": password
    })).catch(
      r=>{
        this._snackBar.open('User exist', 'Close', {duration: 3000,verticalPosition: 'top'});
      }

    ).then(r=>console.log(r));

  }
   async AddUserLab(userId:number,labName:string,mainStack:string){
    let url=URL_USER+"/PutUserLab?id="+userId;
    let body={
      "name": labName,
      "main_stack": mainStack
    }
    return await lastValueFrom(this.http.put<any>(url, body)).then(r=>"Not Exist").catch(r=>"Exist");
  }

}
