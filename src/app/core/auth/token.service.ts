import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import { Token } from "../../api/model/token";
import { BaseToken } from "./base-token";
import { currentTimestamp, filterObject } from "./helpers";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly key = 'stoom-token';

  private _token?: BaseToken;

  constructor(
    private store: LocalStorageService
  ) { }

  set(token?: Token) {
    this.save(token)
    return this;
  }

  valid() {
    return this.token?.valid() ?? false;
  }

  private save(token?: Token){
    this._token = undefined;

    if(!token){
      this.store.remove(this.key);
    } else {
      const value = Object.assign({access_token: '', token_type: 'Bearer'}, token, {
        exp: token.expires_in ? currentTimestamp() + token.expires_in: null,
      });
      this.store.set(this.key, filterObject(value));
    }
  }

  private get token(): BaseToken | undefined {
    if(!this._token){

    }
    return this._token;
  }
}
