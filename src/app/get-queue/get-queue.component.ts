import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Queue } from '../services/queue';

@Injectable({
  providedIn: 'root'
})
export class GetQueueComponent {
  drinks: Queue[] = []
  drink = {
    drink_id: 1
  }

  constructor(private httpClient: HttpClient) { }
  
  getInitQueue(){
    return this.httpClient.get<Queue[]>('http://localhost:3000/queue')
  }

  addDrinkQueue(drinkID: number){
    this.drink.drink_id = drinkID
    this.httpClient.post<Queue>('http://localhost:3000/queue', this.drink) //this is real close, just gotta get it to be within the queue obj in db.json
    this.httpClient.get<Queue[]>('http://localhost:3000/queue').subscribe((x) => {
      console.log(x)
    })
  }
}
