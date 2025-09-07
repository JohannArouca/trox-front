import { Component, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Inicio } from './components/inicio/inicio';
import { Sobre } from './components/sobre/sobre';

@Component({
  selector: 'app-root',
  imports: [Menu, Inicio, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trox-front');
}
