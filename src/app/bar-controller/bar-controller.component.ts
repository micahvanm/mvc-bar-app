import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bar-controller',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './bar-controller.component.html',
  styleUrl: './bar-controller.component.css'
})
export class BarControllerComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
