import { Component } from '@angular/core';
import { Queue } from '../services/queue';
import { GetQueueComponent } from '../get-queue/get-queue.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  queue: Queue[] = []
  queueNums: number[] = []
  
  constructor(private get_queue: GetQueueComponent) { }  
  
  ngOnInit(): void {
    this.initQueue()
  }
  
  
  initQueue(){
    this.get_queue.getInitQueue().subscribe((data)=>{
      this.queue = data
    })
    this.queue.forEach(Q => {
      this.queueNums.push(Q.drink_id)
    })
  }

  getDrinks(){
    return this.queue
  }

  //this is really close.. ran out of time :(
  finishDrink(drinkID: number){
    const location = this.queueNums.indexOf(drinkID)
    this.queue.splice(location, 1)
  }
}
