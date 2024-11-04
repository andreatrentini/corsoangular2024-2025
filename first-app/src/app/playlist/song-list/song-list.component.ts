import { Component, inject, input, InputSignal } from '@angular/core';
import { Song } from '../song';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  songs: InputSignal<Song[]> = input<Song[]>([]);
  indexPlaylist: InputSignal<number> = input.required<number>();

  // Esempio di dependency injection senza uso del costruttore
  playListService = inject(PlaylistService);
  
  removeSong(indexSong: number) {
    this.playListService.removeSong(this.indexPlaylist(), indexSong);
  }
}
