import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "meager") {
      return input.filter((food) => {
        if(food.calories <= 300) {
          return true;
        }
      });
    } else if (desiredCalorieState === "hearty") {
      return input.filter((food) => {
        if(food.calories > 300) {
          return true;
        }
      });
    }
  }
}
