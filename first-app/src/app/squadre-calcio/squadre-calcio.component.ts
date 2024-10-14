import { Component, signal, WritableSignal } from '@angular/core';
import { ISquadra } from './i-squadra';
import { ClassificaComponent } from './classifica/classifica.component';
import { EditClassificaComponent } from './edit-classifica/edit-classifica.component';

@Component({
  selector: 'app-squadre-calcio',
  standalone: true,
  imports: [ClassificaComponent, EditClassificaComponent],
  templateUrl: './squadre-calcio.component.html',
  styleUrl: './squadre-calcio.component.css'
})
export class SquadreCalcioComponent {
  campionato: WritableSignal<ISquadra[]> = signal([
    {
      nome: 'Napoli',
      vittorie: 5,
      pareggi: 1,
      sconfitte: 1
    },
    {
      nome: 'Inter',
      vittorie: 4,
      pareggi: 2,
      sconfitte: 1
    },
    {
      nome: 'Juventus',
      vittorie: 3,
      pareggi: 4,
      sconfitte: 0
    },
    {
      nome: 'Lazio',
      vittorie: 4,
      pareggi: 1,
      sconfitte: 2
    },
    {
      nome: 'Udinese',
      vittorie: 4,
      pareggi: 1,
      sconfitte: 2
    },

  ]);

  aggiungiVittoria() {
    this.campionato()[0].vittorie++;
  }

}
