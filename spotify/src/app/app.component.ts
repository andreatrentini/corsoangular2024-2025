import { Component, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Questo signal consente al componente di sapere se è presente il token bearer dell'applicazione
  validToken: Signal<boolean>;

  constructor(private spotifyService: SpotifyService) {
    // Il signal del componente verrà avvisato dal servizio quando il token sarà arrivato.
    this.validToken = this.spotifyService.tokenValid;
  }

  // Il metodo ngOnInit viene eseguito poco prima che il COMPONENTE sia disponibile per l'utente,
  // cioè prima che del componente venga eseguito il render da parte del browser
  ngOnInit(): void {
    this.spotifyService.getToken();
  }


}
