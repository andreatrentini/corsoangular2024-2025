import { Component, input, InputSignal, Signal } from '@angular/core';
import { Squadra } from '../squadra';

@Component({
  selector: 'app-classifica',
  standalone: true,
  imports: [],
  templateUrl: './classifica.component.html',
  styleUrl: './classifica.component.css'
})
export class ClassificaComponent {
  squadreClassifica: InputSignal<Squadra[]> = input.required<Squadra[]>();
}
