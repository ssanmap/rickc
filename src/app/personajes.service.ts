import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  url: string;

  constructor(
    private http:HttpClient
  ) {
    this.url = 'https://rickandmortyapi.com/api';
  }

  getPersonajes(): Promise<any>{
    return this.http.get(`${this.url}/character `).toPromise();
  }
}
