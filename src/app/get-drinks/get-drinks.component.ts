import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drinks } from '../services/drink';
import { Queue } from '../services/queue';

@Injectable({
  providedIn: 'root'
})
export class GetDrinksComponent {
  drinks: Drinks[] = []

  constructor(private httpClient: HttpClient) { }
  
  getInitDrinks(){
    return this.httpClient.get<Drinks[]>('http://localhost:3000/drinks')
  }

  
}
