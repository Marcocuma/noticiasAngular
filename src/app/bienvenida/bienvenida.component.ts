import { Component, OnInit } from '@angular/core';
import { AyaxService } from '../ayax.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  importantes = []
  noticias = []
  valorFiltro = ''
  constructor(public serv:AyaxService) { 
    this.importantes = this.serv.getNews().slice(0,7)
    this.noticias =  this.serv.getNews().slice(7, this.serv.getNews().length-1)
    console.log(this.importantes)
    console.log(this.noticias)
  }

  ngOnInit(): void {
  }
  filtrar(){
    this.noticias=this.serv.getFiltrada(this.valorFiltro)
    console.log(this.noticias)
  }
}
