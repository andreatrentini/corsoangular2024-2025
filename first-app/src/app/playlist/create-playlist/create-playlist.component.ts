import { Component, Signal, WritableSignal } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-create-playlist',
  standalone: true,
  imports: [],
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.css'
})
export class CreatePlaylistComponent {
  
  playlist: Signal<Playlist[]>;

  // il punto esclamativo mi consente di dichiarare una variabile senza assegnarne il valore.
  // in altre parola può assumere il valore null.
  // numero è una variabile usata solo per spiegarne l'uso.
  numero!: number;
  
  // Dependency injection:
  // la variabile playlistService è il nome con il quale in questo componente
  // faccio riferimento all'oggetto PlayListService che è stato creato (istanziato)
  // all'avvio dell'applicazione
  // Ricorda: providedIn: 'root'
  constructor(private playlistService: PlaylistService) {    
    this.playlist = this.playlistService.playlistRO;
  }
  
  createPlaylist(id: HTMLInputElement, name: HTMLInputElement, description: HTMLInputElement): void {
    let newPlaylist: Playlist = new Playlist(parseInt(id.value), name.value, description.value);
    this.playlistService.addPlaylist(newPlaylist);
    console.log(this.playlist());
  }



}
