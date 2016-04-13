import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `<div class="container">
    <h3 class="food-details">{{ food.name }}Details</h3>
    <li><h5>{{ food.name }}</h5></li>
    <li><h5>{{ food.details }}</h5></li>
    <li><h5> Calories={{ food.calories }}</h5></li>
    <label class="edit-label"><h5>Edit Name:</h5></label>
    <label class="edit-label"><h5>Edit Details:</h5></label>
    <label class="edit-label"><h5>Edit Calories:</h5></label>
    </div>
    <br>
    <input class="input" [(ngModel)]="food.name"/><br>
    <input class="input" [(ngModel)]="food.details"/><br>
    <input class="input" [(ngModel)]="food.calories"/><br>
  `
})
export class EditFoodComponent {
  public food: Food;
}
