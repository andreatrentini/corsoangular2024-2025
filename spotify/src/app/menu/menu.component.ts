import { Component, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  validToken: Signal<boolean>;

  constructor(private spotifyService: SpotifyService) {
    this.validToken = this.spotifyService.tokenValid;
  }
}
