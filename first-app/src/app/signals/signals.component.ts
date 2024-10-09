import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // signal è una funzione wrapper (significa che incorpora un valore)
  // in questo caso di tipo numerico.
  // E' sempre necessario assegnare un valore iniziale ad un signal
  // (valore fra parentesi).
  // Il valore passato a signal può essere di qualsiasi tipo, se voglio
  // rendere esplicito il tipo di dato, lo scriva fra parentesi angolari
  // fra signal e ().
  // Questo tecnologia è chiamata generics
  counter: WritableSignal<number> = signal<number>(0);
  // Uso signal per gestire un array di string
  colori: WritableSignal<string[]> = signal<string[]>(['Red', 'Green', 'Blu']);

  // counter e colori sono modificabili (set, update), è possibile 
  // definire questi signal come WritableSignal

  doppioContatore: Signal<number> = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`Il valore di counter è: ${this.counter()}`);
      console.log(`Il valore di colori è: ${this.colori()}`);
    })
  }

  azzera(): void {
    // Occorre riportare a 0 counter
    // Il metodo signal.set(valore) assegna un nuovo valore al signal
    this.counter.set(0);
  }

  incrementa(): void {
    // Primo metodo
    // this.counter.set(this.counter() + 1);

    // Secondo metodo, da preferire
    this.counter.update(valoreAttuale => valoreAttuale + 1);
  }

  aggiungiColore(nuovoColore: string): void {
    // Metodo update sugli array:
    // vecchiColori = array che contiene i valori presenti quando
    // si clicca sul pulsante Aggiungi
    // update vuole il nuovo valore da assegnare al signal colori
    // questo signal deve contenere un array di string (vedi dichiarazione a riga 21)
    // [...vecchiColori, nuovoColore] restituisce un NUOVO ARRAY che
    // contiene tutti i valori precedenti + il nuovo colore
    this.colori.update(vecchiColori => [...vecchiColori, nuovoColore])
  }

  azzeraColori(): void {
    this.colori.set(['Red', 'Green', 'Blu']);
  }
}
