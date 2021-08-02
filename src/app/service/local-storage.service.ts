import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { 
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      if (this.storage.length > 0) {
        return JSON.parse(this.storage.getItem(key));
      } else {
        const user = new User();
        window.localStorage.setItem('user', JSON.stringify(user));
      }
    } 
  }
}
