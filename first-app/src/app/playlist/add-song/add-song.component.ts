import { Component, inject, input, InputSignal } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Song } from '../song';

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

  add(id: HTMLInputElement, title: HTMLInputElement, artist:HTMLInputElement, genre:HTMLInputElement,
    duration:HTMLInputElement, rating:HTMLInputElement): void {
      // Creo una nuova istanza della classe song
      let newSong: Song = new Song(parseInt(id.value), title.value, artist.value, genre.value, parseInt(duration.value), parseInt(rating.value));      
      // Aggiungo la nuova canzone alla playlist usando il service
      this.playlistService.addSong(this.indexPlaylist(), newSong);
      // Azzero i campi della form
      id.value = '';
      title.value = '';
      artist.value = '';
      genre.value = '';
      duration.value = '';
      rating.value = '';
    }

}
