import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular1';
  titulo = "novedades";
  boton(ev): void {
    alert(ev)
  }
}
