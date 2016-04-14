import { Component } from 'angular2/core';
import {Food} from './food.model';
import {FoodListComponent} from './list-food.component';
@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
        <h1>Follow Thy Food</h1>
        <food-list [foodList]="food" (selectFood)="selectedFood($event)">
        </food-list>

    </div>
  `
})

export class AppComponent {
  public food: Food[];
  constructor() {
    this.food = [
      new Food("Cheeseburger", "Double Cheese and triple bacon", 400),
      new Food("Broccoli", "3 pieces, 2 with ranch", 250),
      new Food("Snickers Bar", "Ate only half", 300)
    ];
}
  selectedFood(clickedFood: Food): void {
  }
}
