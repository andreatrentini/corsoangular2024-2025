import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginEffettuato: WritableSignal<boolean> = signal(false);

  constructor() { }

  login(username: string, password: string):void {
    // Fake login
    if(username == 'utente' && password == 'cisco') {
      // ok, login effetuato correttamente
      this.loginEffettuato.set(true);
    }
  }

  logout() {
    this.loginEffettuato.set(false);
  }
}
