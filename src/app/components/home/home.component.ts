interface Produto{
  nome: string;
  descricao: string;
  valor: number;
  status: string;
}

import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AfterContentChecked, DoCheck, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { GetHomeService } from '../../services/get-home.service';
import { FormsModule, NgModel } from '@angular/forms';
import { PostHomeService } from '../../services/post-home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  produtos: any[] = [];

  valorDouble: number = 0;

  produto: Produto = {
    nome: '',
    descricao: '',
    valor: 0,
    status: ''
  };

  constructor(private getHome: GetHomeService,private postHome: PostHomeService){};

  ngOnInit(){

      this.loadProdutos();
  }

  loadProdutos(){
    this.getHome.getAllProducts("/produto")
    .subscribe(
      (data) => {
        this.produtos = data;
      }
    )
  }

  cadastrarProdutos(){
    this.postHome.enviarDados(this.produto,'produto/cadastrar')
        .subscribe({
          next: (dados) => {
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            this.loadProdutos();
          }
        })
  }
}

