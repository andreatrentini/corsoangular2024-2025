import { Component, inject, input, InputSignal } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-add-song',
  standalone: true,
  imports: [],
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css'
})
export class AddSongComponent {
  indexPlaylist: InputSignal<number> = input.required();

  // Altro esempio per implementare la dependency injection. Il risultato è lo stesso che
  // si ottiene con il metodo visto con il costruttore.
  playlistService = inject(PlaylistService);

}
