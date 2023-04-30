import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_LABS} from "../app/common/url";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http :HttpClient) { }
  async GetOrders():Promise<void >{

  }
}

