import { Injectable, signal, WritableSignal } from '@angular/core';
import { Playlist } from './playlist';
import { RouterTestingHarness } from '@angular/router/testing';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlist: WritableSignal<Playlist[]> = signal<Playlist[]>([]);

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

  clearAllPlaylist(): void {
    this.playlist.set([]);
  }

  addSong(index: number, song: Song): void {
    this.playlist.update(currentPlaylists => {
      currentPlaylists[index].addSong(song);
      return [...currentPlaylists];
    })
  }

  constructor() { }
}
