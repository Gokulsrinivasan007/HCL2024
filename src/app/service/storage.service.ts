import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public saveDataSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public getDataSession(key: string) {
    return sessionStorage.getItem(key)
  }
  public removeDataSession(key: string) {
    sessionStorage.removeItem(key);
  }

  public clearDataSession() {
    sessionStorage.clear();
  }
}
