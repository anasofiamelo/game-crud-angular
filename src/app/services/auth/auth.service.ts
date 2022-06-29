import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API = 'https://api-labs.tindin.com.br';

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    return this.http
      .post(
        `${this.API}/auth`,
        { email, password },
        { responseType: 'text', observe: 'response' }
      )
      .pipe(
        tap((res) => {
          console.log('res: ', res);
          // const authToken = res.headers.get('Authorization');
          // this.userService.setToken(authToken);
        })
      );
  }
}
