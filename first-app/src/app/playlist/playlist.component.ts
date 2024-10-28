import { Component } from '@angular/core';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CreatePlaylistComponent, EditPlaylistComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

}
