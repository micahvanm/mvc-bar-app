import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router: Router){}

  goToMenu(){
    this.router.navigateByUrl("/menu")
  }

  goToOrder(){
    this.router.navigateByUrl("/orders")
  }
}
