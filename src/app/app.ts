import { Component, signal } from '@angular/core';
import { Menu } from './components/menu/menu';
import { Inicio } from './components/inicio/inicio';
import { Sobre } from './components/sobre/sobre';
import { Integrantes } from './components/integrantes/integrantes';
import { Videos } from './components/videos/videos';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [Menu, Inicio, Sobre, Integrantes, Videos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trox-front');
}
