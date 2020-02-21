import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AyaxService {
  news = null;
  page = 1;
  title = '';
  constructor(public http:HttpClient) {
    
  }
  getNews(){
    this.http.get('https://newsapi.org/v2/everything?languaje=es&domains=elpais.com,elmundo.es,elcortodigital.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8').subscribe(
      resultado => {
        this.news = resultado
      }
    )
    if(this.news != null)
      return this.news.articles;
    return null;
  }
  getFiltrada(param:string){
    this.page=1
    console.log('Parametro'+param)
    var link='https://newsapi.org/v2/everything?languaje=es&qInTitle='+param
    link+='&domains=elpais.com,elmundo.es,ideal.es&page='+this.page+'&apiKey=e859accb681646698b5ba6f1e8b23ba8'
    this.http.get(link).subscribe(
      resultado => {
        this.news = resultado;
      }
    )
    console.log(link)
    return this.news.articles;
  }
}
