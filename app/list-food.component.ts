import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';
import {FoodComponent} from './food.component';
import {NewFoodComponent} from './new-food.component';
import {CaloriePipe} from './calorie.pipe';
import {EditFoodComponent} from './edit-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['selectFood'],
  pipes: [CaloriePipe],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent],
  template: `
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>

  <br>
  <h2>Food Log</h2>
  <food-display *ngFor="#currentFood of foodList | calorie:filterCalorie" (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood" [food]="currentFood"></food-display>

  <select (change)="onChange($event.target.value)">
  <option value="hearty">Over 300 calories</option>
  <option value="meager">Under 300 Calories</option>
  </select>

  <div class="row">
      <edit-food *ngIf="selectedFood"
      [food]="selectedFood">
      </edit-food>
  </div>`

})


export class FoodListComponent {
  public foodList: Food[];
  public selectFood: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalorie: string = "hearty";
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
