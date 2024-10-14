import { Component, effect, model } from '@angular/core';
import { ISquadra } from '../i-squadra';

@Component({
  selector: 'app-edit-classifica',
  standalone: true,
  imports: [],
  templateUrl: './edit-classifica.component.html',
  styleUrl: './edit-classifica.component.css'
})
export class EditClassificaComponent {

  campionato = model.required<ISquadra[]>();

  constructor() {
    effect(() => {
      console.log(this.campionato());
    })
  }

  aggiungiVittoria(i: number) {
    this.campionato.update((classifica) => {
      classifica[i].vittorie++;
      classifica.sort((a, b) => (b.vittorie * 3 + b.pareggi) - (a.vittorie * 3 + a.pareggi));
      return [...classifica];
    })   
  }
  aggiungiPareggio(i: number) {
    this.campionato.update((classifica) => {
      classifica[i].pareggi++;
      classifica.sort((a, b) => (b.vittorie * 3 + b.pareggi) - (a.vittorie * 3 + a.pareggi));
      return [...classifica];
    })  
  }
  aggiungiSconfitta(i: number) {
    this.campionato.update((classifica) => {
      classifica[i].sconfitte++;
      classifica.sort((a, b) => (b.vittorie * 3 + b.pareggi) - (a.vittorie * 3 + a.pareggi));
      return [...classifica];
    })  
  }
}
