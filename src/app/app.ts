import { Component, signal } from '@angular/core';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('trox-front');
}
