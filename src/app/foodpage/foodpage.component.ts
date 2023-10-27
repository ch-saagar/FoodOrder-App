import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../services/food/foodservice.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
addToCart() {
throw new Error('Method not implemented.');
}
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, 
    private foodService: FoodserviceService)  {

      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
  }

}
