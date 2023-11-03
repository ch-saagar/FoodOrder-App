import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  cartSubject: any;
  addToCart(food:Food) :void{
    let cartItem= this.cart.items.find(item => item.food.id === food.id)
    if (cartItem){
      this.changeQuantity(food.id, cartItem.quantity+1)
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number): void{
    this.cart.items =this.cart.items.filter(item => item.food.id != foodId)
    
  }

  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
    return this.cart;
  }
  
}
