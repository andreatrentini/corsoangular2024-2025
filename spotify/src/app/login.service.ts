import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginEffettuato: WritableSignal<boolean> = signal(false);
  loginEffettuato: Signal<boolean> = this._loginEffettuato.asReadonly();

  private _usernamePasswordErrati: WritableSignal<boolean> = signal(false);
  usernamePasswordErrati: Signal<boolean> = this._usernamePasswordErrati.asReadonly();

  private router: Router = inject(Router);

  constructor() { }

  login(username: string, password: string):void {
    // Fake login
    if(username == 'utente' && password == 'cisco') {
      // ok, login effetuato correttamente
      this._loginEffettuato.set(true);
      this._usernamePasswordErrati.set(false);
    }
    else {
      this._usernamePasswordErrati.set(true);
    }
  }

  logout() {
    this._loginEffettuato.set(false);
    this._usernamePasswordErrati.set(false);
    this.router.navigate(['/']);
  }

  azzeraErrore(): void {
    this._usernamePasswordErrati.set(false);
  }
}
