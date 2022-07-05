import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { TokenService } from './auth/token.service';
import { LoadingService } from './loading/loading.service';

@Injectable({
  providedIn: 'root'
})

export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private loader: LoadingService){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show()

    if(this.tokenService.hasToken()){
      const token = this.tokenService.getToken()
      const clonedRequest = req.clone({ headers: req.headers.append('x-api-key', token) });

      return next.handle(clonedRequest).pipe(finalize(() => {
        this.loader.hide()
      }));
  }

  return next.handle(req).pipe(finalize(() => {
    this.loader.hide()
  }))

  }
}
