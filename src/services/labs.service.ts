import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_LABS, URL_USER} from "../app/common/url";
import {lastValueFrom} from "rxjs";
import {Lab} from "../app/Components/labs/lab/lab.component";
import {LabsComponent} from "../app/Components/labs/labs.component";
@Injectable({
  providedIn: 'root'
})
export class LabsService {

  constructor(private http :HttpClient) { }
  async GetLabs(userid:number):Promise<Lab[]>{
    let responce =await lastValueFrom(this.http.get<any>(URL_USER+"/ShowLabs?id="+userid)).catch((_:any) => null);
    console.log(responce);
    return responce;
  }

  async DeleteReview(id:number){
    let url=URL_LABS + "/DeleteLabReview?id=" + id;
    let resp=await lastValueFrom(this.http.delete(url));
    console.log(resp);
  }


  async DeleteLab(id:number){
    let url=URL_LABS + "/" + id;
    let resp=await lastValueFrom(this.http.delete(url));
    console.log(resp);
  }
  async postReview(LabId:number,review:string,score:number):Promise<void>{
    let url=URL_LABS + "/PutLabReview?id=" + LabId;
    let resp =await lastValueFrom(this.http.put(url, {
      "score": score,
      "text": review,
    }));
  }
  async CheckLabNameFree(labName:string){
    labName.replace("+","%2B");
    let url=URL_LABS+"/ShowLabByName?name="+labName;
    console.log(url);
    let resp=await lastValueFrom(this.http.get(url)).catch((_:any) => null);
    console.log(resp);
    return resp;
  }
}

