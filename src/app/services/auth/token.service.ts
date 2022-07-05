import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token_key: string = 'token-authenticated';

  hasToken() {
    return !!this.getToken();
  }
  setToken(token: string) {
    window.localStorage.setItem(this.token_key, token);
  }
  getToken() {
    return window.localStorage.getItem(this.token_key) || [];
  }
  removeToken() {
    window.localStorage.removeItem(this.token_key);
  }
}
