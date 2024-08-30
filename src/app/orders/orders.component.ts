import { Component } from '@angular/core';
import { Queue } from '../services/queue';
import { GetQueueComponent } from '../get-queue/get-queue.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  queue: Queue[] = []
  
  constructor(private get_queue: GetQueueComponent) { }  
  
  ngOnInit(): void {
    this.initQueue()
  }
  
  
  initQueue(){
    this.get_queue.getInitQueue().subscribe((data)=>{
      this.queue = data
    })
  }

  getDrinks(){
    return this.queue
  }
}
