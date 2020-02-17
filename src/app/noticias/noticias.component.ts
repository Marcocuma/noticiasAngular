import { Component, OnInit } from '@angular/core';
import { AyaxService } from '../ayax.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias = ''
  importantes = ''
  constructor(public serv:AyaxService) {
   }

  ngOnInit(): void {
    this.importantes = this.serv.getNews().slice(0,7)
    this.noticias =  this.serv.getNews().slice(7, this.serv.getNews().length-1)
    console.log(this.importantes)
  }

}
