import { Component, signal, WritableSignal } from '@angular/core';
import { IInsegnante } from './i-insegnante';

@Component({
  selector: 'app-insegnanti',
  standalone: true,
  imports: [],
  templateUrl: './insegnanti.component.html',
  styleUrl: './insegnanti.component.css'
})
export class InsegnantiComponent {
  insegnanti: WritableSignal<IInsegnante[]> = signal([]);
}
