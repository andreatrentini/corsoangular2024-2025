import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
import { AddSongComponent } from '../add-song/add-song.component';
import { SongListComponent } from '../song-list/song-list.component';

enum TipoRiga {
  visulizzazione, edit
};

@Component({
  selector: 'app-edit-playlist',
  standalone: true,
  imports: [AddSongComponent, SongListComponent],
  templateUrl: './edit-playlist.component.html',
  styleUrl: './edit-playlist.component.css'
})
export class EditPlaylistComponent {
  playlist: Signal<Playlist[]>;
  // La riga seguente ci consente di usare l'enumerativo nel template HTML.
  // Occorre ricordare che nel template è possibile usare SOLO attributi della classe,
  // NON tipo definiti fuori dalla classe. tipoRiga corrisponde alla definizione dell'enumerativo
  tipoRiga = TipoRiga;
  // Modo con il quale viene visualizzata la riga
  viewType: WritableSignal<TipoRiga> = signal<TipoRiga>(TipoRiga.visulizzazione);
  // Indice della playlist in edit mode
  indexEditPlaylist: WritableSignal<number> = signal<number>(-1);

  constructor(private playListService: PlaylistService) {
    this.playlist = this.playListService.playlistRO;
  }

  removePlaylist(index: number): void {
    this.playListService.removePlaylist(index);
  }

  editPlaylist(index: number): void {
    this.indexEditPlaylist.set(index);
  }

  undo(): void {
    this.indexEditPlaylist.set(-1);
  }
  
  save(index: number, name: string, description: string) {
    this.playListService.editPlayList(index, name, description);    
    this.indexEditPlaylist.set(-1);
  }
}
