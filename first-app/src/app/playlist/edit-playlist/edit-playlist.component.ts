import { Component, Signal } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
import { AddSongComponent } from '../add-song/add-song.component';

@Component({
  selector: 'app-edit-playlist',
  standalone: true,
  imports: [AddSongComponent],
  templateUrl: './edit-playlist.component.html',
  styleUrl: './edit-playlist.component.css'
})
export class EditPlaylistComponent {
  playlist: Signal<Playlist[]>;

  constructor(private playListService: PlaylistService) {
    this.playlist = this.playListService.playlistRO;
  }


  
}
