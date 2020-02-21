import { Component, OnInit } from '@angular/core';
import { AyaxService } from '../ayax.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  importantes = []
  noticias = []
  valorFiltro = ''
  bloqueo = false
  page = 1
  constructor(public serv:AyaxService) { 
    this.getNews()
    $(window).scroll(() => {
      if(!this.bloqueo&&this.page<6&&($(window).scrollTop() + $(window).height() >= $(document).height()-100)){
        console.log("entra")
        this.bloqueo = true
        this.serv.cargarNoticias(this.page,this.valorFiltro).toPromise().then((result)=>{
          this.anadirNoticias(result)
          this.page++
        }).finally(()=> this.bloqueo = false)
      }
    });
  }

  ngOnInit(): void {
  }
  async getNews(){
    this.serv.getNews().toPromise().then((resultado) => {
      this.crearVariablesNoticias(resultado)
      this.page++
    })
  }
  anadirNoticias(resultado){
    this.noticias = this.noticias.concat(resultado.articles)
  }
  crearVariablesNoticias(resultado){
    this.importantes = resultado.articles.slice(0, 7);
    this.noticias = resultado.articles.slice(7, resultado.length);
  }
  filtrar(){
    this.serv.getFiltrada(this.valorFiltro).toPromise().then((resultado) =>{
      this.crearVariablesNoticias(resultado)
      this.page = 2
    })
  }
}
