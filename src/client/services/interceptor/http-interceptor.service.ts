import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(AuthenticationService.ACCESS_TOKEN_KEY);
    if (accessToken) {
      let authReq = req.clone(
        {
          headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
        }
      );

    }
    return next.handle(req);
  }
}
