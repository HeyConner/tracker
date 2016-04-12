import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['submitFood'],
  template: `
      <h3>Add Food</h3>
      <input class="add-food" placeholder="Food" #newName><br>
      <input class="add-food" placeholder="Details" #newDetails><br>
      <input class="add-food" type="number" placeholder="Calories" #newCalories><br>
      <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
  `
})
export class NewFoodComponent {
  public submitFood: EventEmitter<Food>;
  constructor() {
    this.submitFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var name = userName.value;
    var details = userDetails.value;
    var calories = parseInt(userCalories.value);
    var newFood = new Food(name, details, calories);
    this.submitFood.emit(newFood);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
