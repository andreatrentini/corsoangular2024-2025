import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Squadra } from './squadra';
import { AggiungiSquadraComponent } from './aggiungi-squadra/aggiungi-squadra.component';
import { ClassificaComponent } from './classifica/classifica.component';

@Component({
  selector: 'app-campionato',
  standalone: true,
  imports: [AggiungiSquadraComponent, ClassificaComponent],
  templateUrl: './campionato.component.html',
  styleUrl: './campionato.component.css'
})
export class CampionatoComponent {
  squadre: WritableSignal<Squadra[]> = signal<Squadra[]>([]);

  azzera(): void {
    this.squadre.set([]);
  }

  constructor() {
    effect(() => {
      console.log(this.squadre());
    })
  }

  vittoria(i: number): void {
    this.squadre.update(elencoSquadre => {
      elencoSquadre[i].vittorie++;
      elencoSquadre.sort((sq1, sq2) => {
        return sq2.punti - sq1.punti;
      })
      return [...elencoSquadre];
    })
  }

  pareggio(i: number): void {
    this.squadre.update(elencoSquadre => {
      elencoSquadre[i].pareggi++;
      elencoSquadre.sort((sq1, sq2) => {
        return sq2.punti - sq1.punti;
      })
      return [...elencoSquadre];
    })
  }

  sconfitta(i: number): void {
    this.squadre.update(elencoSquadre => {
      elencoSquadre[i].sconfitte++;      
      return [...elencoSquadre];
    })
  }

  
}
