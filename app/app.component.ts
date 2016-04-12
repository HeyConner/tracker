import { Component } from 'angular2/core';

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

}
export class Food {
  public food: Food;
  constructor(public name: string, public details: string, public calories: number ) {
    this.food = new Food("Cheeseburger", "Double Cheese and triple bacon", 400)
  }
}
