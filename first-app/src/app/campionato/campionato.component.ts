import { Component, signal, WritableSignal } from '@angular/core';
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
}
