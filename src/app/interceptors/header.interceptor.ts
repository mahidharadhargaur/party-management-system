import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, mergeMap, take } from 'rxjs';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    return token.pipe(
      take(1),
      mergeMap((token) => {
        if (token) {
          const headers = req.headers.set('Authorization', `Token ${token}`);
          const authReq = req.clone({ headers });
          return next.handle(authReq);
        }
        return next.handle(req);
      })
    );
  }
}
