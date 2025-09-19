import { Component } from '@angular/core';

interface Video {
  id: number;
  titulo: string;
  subtitulo: string;
  youtubeId: string;
}

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.html',
  styleUrl: './videos.scss',
})
export class Videos {
  videos: Video[] = [
    {
      id: 1,
      titulo: 'Bring me to life',
      subtitulo: 'Cover da música Bring me to life da banda Evanescence',
      youtubeId: 'LLY1QPGuBjE',
    },
    {
      id: 2,
      titulo: 'Jump',
      subtitulo: 'Cover da música Jump da banda Van Halen',
      youtubeId: '62sEuGUUb9g',
    },
    {
      id: 3,
      titulo: 'Malandragem',
      subtitulo: 'Cover da música Malandragem da Cássia Eller',
      youtubeId: 'gvJUKC7UoJA',
    },
    {
      id: 4,
      titulo: 'Owner of a lonely heart',
      subtitulo: 'Cover da música Owner of a lonely heart da banda Yes',
      youtubeId: '3Xv-8Hi7CGU',
    },
    {
      id: 5,
      titulo: 'I Want to Break Free',
      subtitulo: 'Cover da música I Want to Break Free da banda Queen',
      youtubeId: 'MUmrYGKW61U',
    },
  ];

  getThumb(youtubeId: string): string {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }

  abrirVideo(youtubeId: string) {
    const url = `https://www.youtube.com/watch?v=${youtubeId}`;
    window.open(url, '_blank');
  }
}
