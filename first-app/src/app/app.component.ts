import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponenteComponent } from './primo-componente/primo-componente.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimoComponenteComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
