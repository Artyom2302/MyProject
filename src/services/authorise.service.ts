import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {URL_USER} from "../app/common/url";

@Injectable({
  providedIn: 'root'
})
export class AuthoriseService {

  constructor(private http :HttpClient) { }

  async Authorise(login:string, password:string):Promise<string> {
    let response = await lastValueFrom(this.http.get<any>(URL_USER+"/ShowUserByLogin?login="+login)).catch((_:any) => null);
    if (response==null){
      return "Not found";
    }
    else if(response.password!=password){
      return "Wrong password";
    }
    else{
      return "Authorise";
    }
  }

  async Register(login:string,password:string) {
    console.log(login);
    console.log(password);
    console.log(URL_USER);

    let resp =  await lastValueFrom( this.http.post(URL_USER, {
      "login": login,
      "password": password
    }));
    console.log(resp);

  }



}
