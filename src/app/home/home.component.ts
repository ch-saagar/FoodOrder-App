import { Component } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private fs:FoodserviceService, private route:ActivatedRoute){}
  
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      if (params['searchItem'])
      this.foods= this.fs.getAll().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods= this.fs.getAll()
    })
    
  }
}
