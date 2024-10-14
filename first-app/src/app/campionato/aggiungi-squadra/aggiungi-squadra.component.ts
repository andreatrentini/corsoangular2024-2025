import { Component, model } from '@angular/core';
import { Squadra } from '../squadra';

@Component({
  selector: 'app-aggiungi-squadra',
  standalone: true,
  imports: [],
  templateUrl: './aggiungi-squadra.component.html',
  styleUrl: './aggiungi-squadra.component.css'
})
export class AggiungiSquadraComponent {
  // model è una funzione wrapper, cioè un signal che crea un collegamento
  // two-way con i dati di un componente parent
  squadreCampionato = model.required<Squadra[]>();
}
