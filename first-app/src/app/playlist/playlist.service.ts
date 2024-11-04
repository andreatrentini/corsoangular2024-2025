import { Injectable, signal, WritableSignal } from '@angular/core';
import { Playlist } from './playlist';
import { Song } from './song';

// Injectable:
// all'avvio dell'applicazione (in base al valore del parametro providedIn) viene creata
// una istanza della classe PlaylistService.
// L'istanza creata può essere usata da ogni componente attraverso il meccanismo chiamato
// dependency injection.
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  // playlist, un writable signal che gestisce un array di playlist, potrà essere usato
  // in tutti i componenti che ne hanno bisogno. In questo modo ho la possibilità di condividere
  // lo stesso array di playlist in qualsiasi componente lo richieda.
  private playlist: WritableSignal<Playlist[]> = signal<Playlist[]>([]);
  public playlistRO = this.playlist.asReadonly();

  addPlaylist(playlist: Playlist): void {
    this.playlist.update(currentPlaylists => [...currentPlaylists, playlist]);
  }

  removePlaylist(index: number): void {
    this.playlist.update(currentPlaylists => {
      let tmp = currentPlaylists;
      tmp.splice(index, 1);      
      return [...tmp];
    })
  }

  editPlayList(index: number, name: string, description: string) {
    this.playlist.update(current => {
      current[index].name = name;
      current[index].description = description;
      return [...current];
    })
  }

  clearAllPlaylist(): void {
    this.playlist.set([]);
  }

  addSong(index: number, song: Song): void {
    this.playlist.update(currentPlaylists => {
      currentPlaylists[index].addSong(song);
      return [...currentPlaylists];
    })
  }

  removeSong(indexPlaylist: number, indexSong: number): void {
    this.playlist.update(current => {
      current[indexPlaylist].songs.splice(indexSong, 1);
      return [...current];
    })
  }


  constructor() { }
}
