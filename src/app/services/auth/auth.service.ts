import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// interface Token {
//   user: {
//     _id: string;
//   };
//   token: string;
// }
interface ResponseAuth {
  body: string;
  headers: HttpHeaders;
  ok: boolean;
  status: number;
  statusText: string;
  type: number;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API = 'https://api-labs.tindin.com.br';
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(email: string, password: string) {
    return this.http
      .post(
        `${this.API}/auth`,
        { email, password },
        { responseType: 'text', observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const response = JSON.parse(res.body || '{}');
          this.tokenService.setToken(response.token);
        })
      );
  }
}
