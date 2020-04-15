import { Injectable } from '@angular/core';
import { Filmes } from './Model/filmes.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  filmes: Filmes[] = [];
  
  constructor() { }

  ngOnInit(): void {

    this.filmes = [
      {
        titulo: 'Teste',
        imagem: 'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg',
        valor: 1250,
        detalhes: 'teste',
      
      }
    ];
  }
}
