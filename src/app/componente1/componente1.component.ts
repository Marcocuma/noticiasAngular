import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  nombre="jose";
  trataEvento()
  {
    this.nombre="pepe"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
