import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-edit-playlist',
  standalone: true,
  imports: [],
  templateUrl: './edit-playlist.component.html',
  styleUrl: './edit-playlist.component.css'
})
export class EditPlaylistComponent {
  altraIstanzaPlaylistService: PlaylistService = new PlaylistService();
  
  addPlayList() {
    this.altraIstanzaPlaylistService.addPlaylist(new Playlist(1, 'PL2'));
  }
}
