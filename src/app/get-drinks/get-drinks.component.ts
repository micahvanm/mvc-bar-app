import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Drinks } from '../services/drink';
import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-get-drinks',
//   standalone: true,
//   imports: [],
//   templateUrl: './get-drinks.component.html',
//   styleUrl: './get-drinks.component.css',
//   providers: [HttpClient]
// })
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
