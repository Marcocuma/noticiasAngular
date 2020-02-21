import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AyaxService {
  news = null;
  title = '';
  constructor(public http:HttpClient) {
    
  }
  public getNews<T>() : Observable <T>{
    return this.http.get<T>('https://newsapi.org/v2/everything?languaje=es&domains=elpais.com,elmundo.es,elcortodigital.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8')
  }
  getFiltrada<T>(param:string): Observable <T>{
    console.log('Parametro'+param)
    var link='https://newsapi.org/v2/everything?languaje=es&qInTitle='+param
    link+='&domains=elpais.com,elmundo.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8'
    return this.http.get<T>(link)
  }
  cargarNoticias<T>(page = 1,filtro = null): Observable <T>{
      var link;
      if(filtro)
        link='https://newsapi.org/v2/everything?languaje=es&qInTitle='+filtro
      else
        link='https://newsapi.org/v2/everything?languaje=es'
      link+='&domains=elpais.com,elmundo.es,ideal.es&page='+page+'&apiKey=e859accb681646698b5ba6f1e8b23ba8'
      return this.http.get<T>(link)
  }
}
