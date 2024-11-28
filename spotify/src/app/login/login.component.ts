import { Component, effect, inject, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  private loginService: LoginService = inject(LoginService);
  private router: Router = inject(Router);

  usernamePasswordErrati: Signal<boolean> = this.loginService.usernamePasswordErrati;
  loginEffetuato: Signal<boolean> = this.loginService.loginEffettuato;

  constructor() {
    effect(() => {
      if (this.usernamePasswordErrati()) {
        timer(3000).subscribe(() => {
          this.loginService.azzeraErrore();
          this.loginForm.reset();
        })
      }
    })
    effect(() => {
      if(this.loginEffetuato()) {
        this.router.navigate(['/']);
      }
    })
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
  }
}
