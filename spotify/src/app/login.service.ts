import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginEffettuato: WritableSignal<boolean> = signal(false);
  loginEeffettuato: Signal<boolean> = this._loginEffettuato.asReadonly();

  constructor() { }

  login(username: string, password: string):void {
    // Fake login
    if(username == 'utente' && password == 'cisco') {
      // ok, login effetuato correttamente
      this._loginEffettuato.set(true);
    }
  }

  logout() {
    this._loginEffettuato.set(false);
  }
}
