import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';
import {FoodComponent} from './food.component';
import {NewFoodComponent} from './new-food.component';
import {CaloriePipe} from './calorie.pipe';
import {EditFoodComponent} from './edit-food.component';


export class FoodListComponent {
  public foodList: Food[];
  public selectFood: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalorie: string = "all";
  constructor() {
    this.selectFood = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.selectFood.emit(clickedFood);
  }
  createFood(newFood): void {
   this.foodList.push(newFood);
 }
  onChange(filterOption) {
    this.filterCalorie = filterOption;
  }
}
