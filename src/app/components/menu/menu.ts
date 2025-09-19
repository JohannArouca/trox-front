import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menuItens = [
    {
      id: 1,
      link: '#inicio',
      texto: 'Início',
    },
    {
      id: 2,
      link: '#sobre',
      texto: 'Sobre',
    },
    {
      id: 3,
      link: '#integrantes',
      texto: 'Integrantes',
    },
    {
      id: 4,
      link: '#videos',
      texto: 'Vídeos',
    },
    /* {
      id: 5,
      link: '#shows',
      texto: 'Shows',
    },
    {
      id: 6,
      link: '#contato',
      texto: 'Contato',
    }, */
  ];
}
