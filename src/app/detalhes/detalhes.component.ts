import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(public dadosService: DadosService, private router: Router) { }

  ngOnInit() {
  }
  formulario = new FormGroup({
    titulo: new FormControl(null, [Validators.required, Validators.maxLength(32)]),
    //sobrenome: new FormControl(null, [Validators.required, Validators.maxLength(16)]),
    imagem: new FormControl(null, [Validators.required]),
    detalhes: new FormControl(null, [Validators.required])
    //receberNovidades: new FormControl(false)
  });

  detalhar(){
  this.dadosService.filmes.push(this.formulario.value);
  }
}
