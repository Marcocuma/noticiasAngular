import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { Nav2Component } from './nav2/nav2.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AyaxService } from './ayax.service';
import { SubrayarDirective } from './subrayar.directive'
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MayusculaPipe } from './mayuscula.pipe';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: '', component: BienvenidaComponent},
  { path: 'inicio', component: BienvenidaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Nav2Component,
    SubrayarDirective,
    BienvenidaComponent,
    MayusculaPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AyaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
