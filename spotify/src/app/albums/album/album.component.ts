import { Component, computed, effect, input, InputSignal, Signal } from '@angular/core';
import { Item } from '../../i-albums';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  album: InputSignal<Item> = input.required<Item>();
}
