import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AyaxService {
  users = null
  constructor(public http:HttpClient) { 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      resultado => {
        this.users=resultado
      }
    )
  }
}
