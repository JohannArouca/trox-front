import { Component, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Inicio } from './components/inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [Menu, Inicio],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trox-front');
}
