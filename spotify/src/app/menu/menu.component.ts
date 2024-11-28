import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  private spotifyService: SpotifyService = inject(SpotifyService);
  private loginService: LoginService = inject(LoginService);

  validToken: Signal<boolean> = this.spotifyService.tokenValid;
  loginEffettuato: Signal<boolean> = this.loginService.loginEffettuato;

  logout() {
    this.loginService.logout();
  }

}
