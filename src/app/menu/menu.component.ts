import { Component, OnInit } from '@angular/core';
import { BarControllerComponent } from '../bar-controller/bar-controller.component';
import { GetDrinksComponent } from '../get-drinks/get-drinks.component';
import { Drinks } from '../services/drink';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  imagesDir = "../../images/"
  drinks: Drinks[] = []
  
  constructor(private get_drinks : GetDrinksComponent) { }  
  
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
  
}
