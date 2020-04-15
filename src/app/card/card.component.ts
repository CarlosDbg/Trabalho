import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    public dadosService: DadosService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  detalhar(){
    this.router.navigateByUrl('detalhes');
    
  }


  
  }

