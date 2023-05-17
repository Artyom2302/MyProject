import {Injectable, Input, Output} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {codeOutline} from "ionicons/icons";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptorService implements HttpInterceptor{

  constructor(private tokenService:TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token=this.tokenService.getToken();


    if (token !== '') {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }


}
