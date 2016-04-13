import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['submitFood'],
  template: `
      <h3>Add Food</h3>
      <input class="add-food" placeholder="Food" #newName><br>
      <input class="add-food" placeholder="Description" #newDetails><br>
      <input class="add-food" type="number" placeholder="Calorie Count" #newCalories>
      <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var name = userName.value;
    var details = userDetails.value;
    var calories = parseInt(userCalories.value);
    var newFood = new Food(name, details, calories);
    this.onSubmitNewFood.emit(newFood);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
