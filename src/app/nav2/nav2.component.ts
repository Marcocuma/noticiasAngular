import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AyaxService } from '../ayax.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {
  @Input() titulo
  @Input() users
  @Output()
  evento = new EventEmitter<string>()
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public serv:AyaxService ,private breakpointObserver: BreakpointObserver) {}
  boton(): void{
    console.log(this.serv.users)
    this.evento.emit("Le has dao al boton")
  }
}
