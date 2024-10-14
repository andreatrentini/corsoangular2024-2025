import { Component, effect, input } from '@angular/core';
import { ISquadra } from '../i-squadra';

@Component({
  selector: 'app-classifica',
  standalone: true,
  imports: [],
  templateUrl: './classifica.component.html',
  styleUrl: './classifica.component.css'
})
export class ClassificaComponent {
  campionato = input.required<ISquadra[]>();

  giocate(i: number) {
    return this.campionato()[i].vittorie + this.campionato()[i].pareggi + this.campionato()[i].sconfitte;
  }

  punti(i: number) {
    return this.campionato()[i].vittorie * 3 + this.campionato()[i].pareggi;
  }

}
