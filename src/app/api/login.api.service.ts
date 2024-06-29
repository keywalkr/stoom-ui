import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Token } from "./model/token";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private baseUrl: string = environment.apiPath;

  constructor(protected _http: HttpClient) {
  }

  login(email: string, password: string) {
    return this._http.post<Token>(`${this.baseUrl}/auth/login`, {email, password});
  }
}
