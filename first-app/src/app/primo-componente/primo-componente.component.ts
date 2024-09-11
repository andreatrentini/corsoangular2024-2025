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
}

