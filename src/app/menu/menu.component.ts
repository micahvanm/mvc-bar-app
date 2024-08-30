import { Component, OnInit } from '@angular/core';
import { BarControllerComponent } from '../bar-controller/bar-controller.component';
import { GetDrinksComponent } from '../get-drinks/get-drinks.component';
import { Drinks } from '../services/drink';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { GetQueueComponent } from '../get-queue/get-queue.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  imagesDir = "../../public/images/"
  drinks: Drinks[] = []
  
  
  constructor(private get_drinks : GetDrinksComponent, private get_queue: GetQueueComponent) { }  
  
  ngOnInit(): void {
    this.initDrinks()
  }
  
  
  initDrinks(){
    this.get_drinks.getInitDrinks().subscribe((data)=>{
      this.drinks = data
    })
  }

  getDrinks(){
    return this.drinks
  }

  urlImage(drink: Drinks){
    // console.log(`./public/images/${drink.image}`)
    return `./public/images/${drink.image}`
  }

  addToQueue(drinkID: number){
    this.get_queue.addDrinkQueue(drinkID)
  }
  
}
