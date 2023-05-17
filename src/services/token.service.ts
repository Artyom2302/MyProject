import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  private token:string=''
  getToken(){
    return this.token;
  }
  setToken(token:string){
    this.token=token;
  }

}
