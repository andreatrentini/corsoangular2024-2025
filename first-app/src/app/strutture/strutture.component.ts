import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-strutture',
  standalone: true,
  // Per abilitare il two way binding è necessario importare FormsModule
  imports: [FormsModule],
  templateUrl: './strutture.component.html',
  styleUrl: './strutture.component.css'
})
export class StruttureComponent {
  // Attributo della classe Strutture component da utilizzare nel template per visualizzare un tag o più oppure
  // altro codice html

  valore: number = 6;
  colori: string[] = ['Rosso', 'Verde', 'Blu', 'Giallo'];
  nuovoColore: string = '';

  azzera(): void {
    this.valore = 0;
  }

  aggiungiColore(): void {
    this.colori.push(this.nuovoColore);
  }
}
