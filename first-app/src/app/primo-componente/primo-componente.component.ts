import { Component } from '@angular/core';

@Component({
  selector: 'app-primo-componente',
  standalone: true,
  imports: [],
  templateUrl: './primo-componente.component.html',
  styleUrl: './primo-componente.component.css'
})
export class PrimoComponenteComponent {
  saluto: string = 'Ciao mondo!';
  valore: number = 0;
  percorsoAlbero:string = 'albero.jpg';
  visibilitaImmagine = 'hidden';

  aggiungi(): void {
    this.valore++;
  }

  casuale(): void {
    setTimeout(() => {
              this.valore = 20;
      }, Math.random() * 10000)
  }

  cambiaImmagine(): void {
    this.percorsoAlbero = 'fiore.jpg';
  }

  mostraImmagine():void {
    this.visibilitaImmagine = 'visible';
  }

  nascondiImmagine(): void {
    this.visibilitaImmagine = 'hidden';
  }

}

