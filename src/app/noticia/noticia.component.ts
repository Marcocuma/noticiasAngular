import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input()  content: any;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.content)
  }

}
