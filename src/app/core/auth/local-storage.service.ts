import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key: string){
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
  }

  set(key:string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  has(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export class MemoryStorageService {
  private store: {[key: string]: string} = {};

  get(key: string){
    return JSON.parse(this.store[key] || '{}') || {};
  }

  set(key: string, value: any) {
    this.store[key] = JSON.stringify(value);
    return true;
  }

  has(key: string){
    return !!this.store[key];
  }

  remove(key:string){
    delete this.store[key]
  }

  clear() {
    this.store = {}
  }
}
