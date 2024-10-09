import { Component } from '@angular/core';
import { Studente } from './studente';

enum Visualizzazione {
  tutti,
  pari,
  dispari
}

@Component({
  selector: 'app-studenti',
  standalone: true,
  imports: [],
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})
export class StudentiComponent {

  // Dichiaro un'array di oggetti di tipo Stuente e lo inizializzo ad array vuoto
  studenti: Studente[] = [];
  // Dichiaro una variabile per definire il tipo di visualizzazione
  visualizzazione: Visualizzazione = Visualizzazione.tutti;

  // Per usare un enumerativo nel template HTML dichiaro un attributo
  // nella classe che prende come valore l'enumerativo stesso
  tipoVisualizzazione = Visualizzazione;

  // Il metodo aggiungi viene invocato quando si preme il pulsante Aggiungi
  // I parametri sono di tipo HTMLInputElement, ovvero sono un oggetto che rappresentra la input inserita
  // nel template HTML
  aggiungi(id: HTMLInputElement, nome: HTMLInputElement, cognome: HTMLInputElement, classe: HTMLInputElement) {
    
    // Per accedere al valore inserito nella input si usa la proprietà value
    // NB: value è sempre di tipo string, per convertirla devo usare parseInt
    let nuovoId:number = parseInt(id.value);
    let nuovoNome: string = nome.value;
    let nuovoCognome: string = cognome.value;
    let nuovaClasse: string = classe.value;

    // Creo una nuova istanza di Studente, passando i parametri al costruttore
    let nuovoStudente = new Studente(nuovoId, nuovoNome, nuovoCognome, nuovaClasse);

    // Aggiungo il nuovo studente all'array studenti.
    this.studenti.push(nuovoStudente);

    // Azzero le input in modo che possa essere inserito un nuovo studente senza cancellare i vecchi valori a mano
    // Value è una proprietà in lettura/scrittura
    id.value = '';
    nome.value = '';
    cognome.value = '';
    classe.value = '';

    // Visualizzo nella console l'elenco degli studenti
    console.log(this.studenti);
  }

  tutti():void {
    this.visualizzazione = Visualizzazione.tutti;
  }
  pari():void {
    this.visualizzazione = Visualizzazione.pari;
  }
  dispari():void {
    this.visualizzazione = Visualizzazione.dispari;
  }
}
