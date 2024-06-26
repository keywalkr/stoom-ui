import { Injectable } from '@angular/core';
import { LoginApiService } from "../../api/login.api.service";
import { map, tap } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _loginApiService: LoginApiService,
    private tokenService: TokenService) {
  }

  login(username: string, password: string) {
    return this._loginApiService.login(username, password)
      .pipe(
        tap(token => this.tokenService.set(token)),
        map(() => this.check())
      );
  }

  check() {
    return this.tokenService.valid()
  }
}
