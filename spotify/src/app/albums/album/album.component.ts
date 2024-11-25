import { Component, input, InputSignal } from '@angular/core';
import { Item } from '../../i-albums';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  album: InputSignal<Item | null> = input.required<Item | null>();
}
