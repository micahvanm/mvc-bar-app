import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Queue } from '../services/queue';

@Injectable({
  providedIn: 'root'
})
export class GetQueueComponent {
  drinks: Queue[] = []

  constructor(private httpClient: HttpClient) { }
  
  getInitQueue(){
    return this.httpClient.get<Queue[]>('http://localhost:3000/queue')
  }
}
