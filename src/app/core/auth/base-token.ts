import { Token } from "../../api/model/token";
import { capitalize, currentTimestamp } from "./helpers";

export abstract class BaseToken {
  constructor(protected attributes: Token) {
  }

  get access_token(): string {
    return this.attributes.access_token;
  }

  get refresh_token(): string|void{
    return this.attributes.refresh_token;
  }

  get token_type(): string {
    return this.attributes.token_type ?? 'bearer ';
  }

  get exp(): number |void {
    return this.attributes.exp;
  }

  valid(): boolean {
    return this.hasAccessToken() && !this.isExpired();
  }

  getBearerToken(): string {
    return this.access_token
      ? [capitalize(this.token_type), this.access_token].join(' ').trim()
      : '';
  }

  private hasAccessToken(): boolean {
    return !!this.access_token;
  }

  private isExpired(): boolean {
    return this.exp !== undefined && this.exp - currentTimestamp() <= 0;
  }
}
