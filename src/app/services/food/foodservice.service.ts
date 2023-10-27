import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }
  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id == id)!;

  }
  getAllFoodByTag(tag:string):Food[]{
    return tag == 'All'?
      this.getAll(): this.getAll().filter(food => food.tags?.
        includes(tag));

  }
 
    

  

  getAll():Food[]{

    return [
      {
        id:1,
        name:'Ice Cream',
        price:5,
        cookTime:'5-7',
        favorite:true,
        origins:['Persia','Turkey'],
        stars:4.7,
        imageUrl: 'assets/f1.jpg',
        tags:['FastFood','Anytime'],

      },
     
      {
        id:2,
        name:'Peri-Peri Fries',
        price:15,
        cookTime:'5-7',
        favorite:true,
        origins:['USA','UK'],
        stars:4.7,
        imageUrl: 'assets/f3.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:3,
        name:'Bingy Burger',
        price:12,
        cookTime:'8-10',
        favorite:true,
        origins:['USA','Italy'],
        stars:4.7,
        imageUrl: 'assets/f4.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:4,
        name:'Paneer Tikka',
        price:50,
        cookTime:'15-20',
        favorite:true,
        origins:['India'],
        stars:4.7,
        imageUrl: 'assets/fp.jpg',
        tags:['FastFood','Anytime'],

      },
      
      {
        id:5,
        name:'Hot Manchurian',
        price:20,
        cookTime:'15-20',
        favorite:true,
        origins:['India'],
        stars:4.7,
        imageUrl: 'assets/f6.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:6,
        name:'Tangy Noodles',
        price:15,
        cookTime:'5-7',
        favorite:true,
        origins:['China'],
        stars:4.7,
        imageUrl: 'assets/f7.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:7,
        name:'Crispy Chaat',
        price:20,
        cookTime:'8-9',
        favorite:true,
        origins:['India', 'Bangladesh'],
        stars:4.7,
        imageUrl: 'assets/chaat.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:8,
        name:'Paani Puri',
        price:15,
        cookTime:'6-8',
        favorite:true,
        origins:['India'],
        stars:4.7,
        imageUrl: 'assets/pp.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:9,
        name:'Paneer Cheese Pizza',
        price:50,
        cookTime:'15-20',
        favorite:true,
        origins:['Italy'],
        stars:4.7,
        imageUrl: 'assets/farm.jpg',
        tags:['FastFood','Anytime'],

      },
      {
        id:10,
        name:'Farmhouse Pizza',
        price:62,
        cookTime:'20-25',
        favorite:true,
        origins:['Italy'],
        stars:4.7,
        imageUrl: 'assets/PaneerPizza.jpg',
        tags:['FastFood','Anytime'],

      }
      
    ];


  }
}
