import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Integrante {
  id: number;
  nome: string;
  icone: string;
  iconeSafe?: SafeHtml;
  funcao: string;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-integrantes',
  imports: [],
  templateUrl: './integrantes.html',
  styleUrl: './integrantes.scss',
})
export class Integrantes {
  integrantes: Integrante[] = [];

  constructor(private _sanitizer: DomSanitizer) {
    const raw: Integrante[] = [
      {
        id: 1,
        nome: 'Rayana Ciribelli',
        icone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="m11 7.601l-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/>
                      <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"/>
                      <circle cx="16" cy="7" r="5"/>
                    </g>
                  </svg>`,
        funcao: 'Vocal',
        imagem: 'assets/integrantes/rayana.jpg',
        descricao:
          'Rayana é de uma família de músicos e cresceu nesse meio. Aos 12 anos, iniciou sua carreira como vocalista de bandas de baile e fazendo shows em barzinhos. Trabalhou como assistente no Estúdio Artigo 28, quando começou também a gravar jingles, spots, vinhetas e até algumas músicas. Paralelamente à vida musical, Rayana se formou em Engenharia Ambiental, e fez pós graduação em Segurança do Trabalho. Atualmente, é empresária no ramo de Recrutamento e Seleção além de Vigilância Patrimonial. Tentou abandonar a vida musical, mas o amor pela música e pelo Rock falou mais alto, então, quando foi convidada para fazer parte da banda T-Rox não resistiu e voltou a cantar.',
      },
      {
        id: 2,
        nome: 'Roberto Mendonça',
        icone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M6.07.402C6.283.236 6.602 0 7.059 0h.031c.39 0 .71.155.922.298C8.225.155 8.543 0 8.934 0h.032c.457 0 .775.236.989.402l.077.06c.19.15.32.252.504.315a19 19 0 0 0 1.24.376l.123.033l.008.002a.5.5 0 0 1 .37.504l-.468 11a.5.5 0 0 1-.334.451l-.01.004l-.046.018a4 4 0 0 0-.717.38c-.417.286-.673.608-.673.938v1a.5.5 0 0 1-1 0v-1c0-.855.635-1.44 1.11-1.76c.252-.173.5-.3.685-.386h.002l.438-10.3l-.098-.029c-.279-.08-.64-.188-.955-.297c-.353-.122-.62-.334-.802-.479l-.067-.053c-.2-.157-.283-.19-.375-.19a.7.7 0 0 0-.386.142a1 1 0 0 0-.164.144l-.005.005a.5.5 0 0 1-.382.177h-.032a.5.5 0 0 1-.382-.177l-.004-.005l-.032-.033c-.03-.03-.076-.07-.133-.11A.7.7 0 0 0 7.06.987c-.091 0-.173.035-.375.191l-.067.053c-.181.144-.448.357-.802.48c-.315.108-.676.216-.955.296l-.098.028l.438 10.3l.003.001c.184.085.433.214.685.386c.473.324 1.11.908 1.11 1.76v1a.5.5 0 0 1-1 0v-1c0-.33-.256-.652-.673-.938a4 4 0 0 0-.764-.398l-.01-.004a.5.5 0 0 1-.334-.451l-.469-11a.5.5 0 0 1 .371-.504l.131-.035l.336-.095c.273-.078.615-.18.905-.28c.182-.064.313-.166.504-.316l.077-.06zM13.4 4.77a.5.5 0 0 1-.414-.492v-.56c0-.243.174-.45.414-.492l1.29-.227c.39 0 .39 2 0 2l-1.29-.227zm-.6 2.51c0 .243.174.45.414.492l1.29.227c.39 0 .39-2 0-2l-1.29.227a.5.5 0 0 0-.414.492v.56zm.1 3.52a.5.5 0 0 1-.414-.492v-.56c0-.243.174-.45.414-.492l1.29-.227c.39 0 .39 2 0 2l-1.29-.227zM1.29 5l1.29-.227a.5.5 0 0 0 .414-.492v-.56a.5.5 0 0 0-.414-.492l-1.29-.227c-.39 0-.39 2 0 2zm1.5 2.77l-1.29.227c-.39 0-.39-2 0-2l1.29.227a.5.5 0 0 1 .414.492v.56c0 .243-.174.45-.414.492zm.3 3.03l-1.29.227c-.39 0-.39-2 0-2l1.29.227a.5.5 0 0 1 .414.492v.56c0 .243-.174.45-.414.492z"/><path fill="currentColor" d="M6.48 4a.5.5 0 0 1 .518.481l.3 6a.5.5 0 1 1-.999.037l-.3-6A.5.5 0 0 1 6.48 4M9 4.48a.5.5 0 0 1 .999.037l-.3 6a.5.5 0 0 1-.999-.037z"/>
                </svg>`,
        funcao: 'Guitarra',
        imagem: 'assets/integrantes/roberto.jpg',
        descricao:
          'Psicólogo, filósofo, psicanalista e professor universitário, Roberto é, também, músico. Foi vocalista de sua primeira banda ainda com 12 anos. Paralelo aos vocais, sempre estudou guitarra e violão, de início didaticamente e, mais tarde, com grandes guitarristas do Brasil. Entre os estilos preferidos estão o Rock (sobretudo dos anos 1960 a 1990), o Blues e o Jazz. No decorrer da carreira, integrou várias bandas e, atualmente, além da T-Rox, é também guitarrista e vocalista da Banda Xevius, de Pará de Minas.',
      },
      {
        id: 3,
        nome: 'Johann Arouca',
        icone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">7
                  <path fill="currentColor" d="M12.2 7.9c.067.268.131.527.186.758c.717 2.51.847 3.03.337 3.59a2.5 2.5 0 0 1-.65.45c-.279.117-.588.307-.767.55c-.171.306-.264.65-.27 1v1.25a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-1.25c-.012-.554.13-1.1.41-1.58c.323-.474.783-.714 1.13-.897c.182-.095.334-.174.423-.263c.113-.113-.197-1.27-.548-2.57c-.454-1.69-.976-3.63-.739-3.91c.204-.238.431-.377.638-.504c.219-.135.416-.256.54-.466c.234-.398.163-.768.09-1.15l-.007-.03a2.3 2.3 0 0 0-.514-1.07c-.531-.534-1.05-.81-2-.81c-.954 0-1.82 1-2.1 2c-.268.96-2.72 8.72-2.92 9.33q-.013.04-.029.08a1.7 1.7 0 0 0-.105.439c-.01.099.003.2.047.29q.034.07.081.132c.062.084.151.14.245.185l.853.406l.021.01c.212.102.475.227.475.458v1.17a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-.77l-.94-.45a1 1 0 0 1-.18-.12a1.7 1.7 0 0 1-.62-.93a2.25 2.25 0 0 1 .15-1.19c.18-.55 2.65-8.41 2.92-9.3c.44-1.36 1.66-2.74 3.06-2.74c1.39 0 2 .362 2.71 1.07c.44.46.733 1.04.842 1.67c.11.627.005 1.48-.232 1.85c-.21.328-.527.549-.838.766l-.12.083l-.11.07c.054.5.302 1.5.524 2.39zM4.41 3.56l-.761-.249a.42.42 0 0 1-.234-.324a2.16 2.16 0 0 1 .105-.999c.086-.302.24-.581.452-.814a.46.46 0 0 1 .342-.175q.09.001.175.03l.73.244a.38.38 0 0 1 .212.173c.13.228.046.609-.021.913l-.003.015a3 3 0 0 1-.152.485l-.008.02c-.1.241-.212.516-.393.644a.4.4 0 0 1-.23.072a.7.7 0 0 1-.214-.036zm-.86 2.79l-.761-.249a.42.42 0 0 1-.266-.314a2.1 2.1 0 0 1 .105-.999c.094-.298.251-.572.462-.803a.5.5 0 0 1 .343-.185q.08.002.156.026l.79.258c.09.03.165.091.211.173c.131.23.038.607-.036.908l-.024.097a2 2 0 0 1-.099.298l-.047.112c-.1.238-.212.507-.39.637a.4.4 0 0 1-.23.078a.7.7 0 0 1-.214-.036zm-.78 2.82l-.865-.283a.46.46 0 0 1-.296-.304a2.16 2.16 0 0 1 .105-.999c.085-.306.24-.588.452-.824a.5.5 0 0 1 .333-.175a.7.7 0 0 1 .195.033l.751.251c.09.027.165.087.212.167c.045.077.043.171.042.255v.012c-.001.069-.037.42-.085.706a2 2 0 0 1-.116.394l-.018.051c-.089.241-.19.52-.37.646a.4.4 0 0 1-.23.072zm-.15.48l-.77-.252a.7.7 0 0 0-.195-.033a.46.46 0 0 0-.333.175a2 2 0 0 0-.452.824a2.16 2.16 0 0 0-.105 1a.42.42 0 0 0 .255.353l.76.25q.106.033.215.035a.4.4 0 0 0 .23-.071c.189-.134.3-.428.398-.684l.006-.017a4 4 0 0 0 .158-.507c.07-.302.148-.68.026-.902a.4.4 0 0 0-.193-.17z"/>
                </svg>`,
        funcao: 'Baixo',
        imagem: 'assets/integrantes/johann.jpg',
        descricao:
          'Johann carrega a música já em seu nome, que é uma homenagem ao músico e compositor erudito, Johann Sebastian Bach. O Johann do T-Rox é Engenheiro da Computação e, paralelamente à banda, trabalha como desenvolvedor de softwares. Assim como o baixista Chris Squire, do Yes, iniciou sua carreira musical cantando em um coro infantil. Participou de diversas gravações no estúdio da família e o T-Rox é a sua primeira banda de rock, que é o seu estilo musical favorito.',
      },
      {
        id: 4,
        nome: 'Alex Arouca',
        icone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                  <path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 208H48V48h24v96a8 8 0 0 0 8 8h8Zm64 0h-48v-56h8a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8Zm56 0h-40v-56h8a8 8 0 0 0 8-8V48h24z"/>
                </svg>`,
        funcao: 'Teclado',
        imagem: 'assets/integrantes/alex.jpg',
        descricao:
          'Alex é bacharel em Administração Pública e licenciado em Música, atuando em ambas as áreas. Iniciou no teclado, ainda adolescente, com um grupo de amigos. Tocou em bandas de baile, acompanhando artistas e em bandas de Rock, que é seu estilo predileto. Sua banda preferida é o Yes, especialmente por causa do tecladista Rick Wakeman. Atualmente, além de tecladista do T-Rox, é professor de Educação Musical e de Xadrez, e atua no serviço público, na área cultural e administrativa.',
      },
      {
        id: 5,
        nome: 'Claudinho Batera',
        icone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 2l8 8m12-8l-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9"/></g>
                </svg>`,
        funcao: 'Bateria',
        imagem: 'assets/integrantes/claudinho.jpg',
        descricao:
          'Começou na bateria em 1986, tocando em bandas de baile. Em São Paulo e Belo Horizonte, Claudinho firmou sua carreira musical acompanhando diversos artistas. Há alguns anos, voltou para Formiga, sua terra natal, pois sua paixão pelo Rock e pelas músicas dos anos 80 e 90, falou mais alto! Atualmente, é professor de bateria e percussão na Escola Municipal de Música de Formiga e baterista da banda T-Rox.',
      },
    ];

    this.integrantes = raw.map((item) => ({
      ...item,
      iconeSafe: this._sanitizer.bypassSecurityTrustHtml(item.icone),
    }));
  }
}
