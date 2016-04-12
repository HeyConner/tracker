import { Component } from 'angular2/core';
import {Food} from './food.model';
import {ListFoodComponent} from './list-food';
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Food Tracker</h1>
      <h3>{{ food.name }}<h3>
      <h5>{{ food.details }}<h5>
      <h4>{{ food.calories }}<h4>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.food = [
      new Food("Cheeseburger", "Double Cheese and triple bacon", 400),
      new Food("Broccoli", "3 pieces, 2 with ranch", 250),
      new Food("Snickers Bar", "Ate only half", 300)
    ];
}
  selectedFood(thisFood: Food): void {
  }
}
