import { Injectable } from '@angular/core';
import { LoginApiService } from "../../api/login.api.service";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable()

  constructor(
    private _loginApiService: LoginApiService,
    private tokenService: TokenService) {
  }

  login(username: string, password: string) {
    return this._loginApiService.login(username, password)
      .pipe(
        tap(token => {
          this.isLoggedInSubject.next(true);
          return this.tokenService.set(token)
        }),
        map(() => this.check()),
        map(() => true)
      );
  }

  check() {
    return this.tokenService.valid()
  }
}
