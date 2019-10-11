import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  items = require('../assets/items.json');

  cart = [];
  totalPrice=0;

  getItems(){
    return this.items;
  }

  getCart(){
    return this.cart;
  }

  addToCart(product){
    let present=false;
    this.cart.forEach(element => {
      if(element.item==product.item){
        element.quantity+=1;
        this.totalPrice+=product.price;
        present=true;
      }
    });
    if(present==false){
      this.cart.push(product);
      this.totalPrice+=product.price;
    }
    return this.cart;
  }

  removeFromCart(product){
    this.totalPrice-=product.price*product.quantity;
    let index = this.cart.indexOf(product);
 
    if (index > -1) {
       this.cart.splice(index, 1);
    }

    return this.cart;

  }

  getTotalPrice(){
    return this.totalPrice;
  }

  deleteFromCart(){

  }

  increaseQunatity(product){
    this.totalPrice+=product.price;
    this.cart.forEach(element => {
      if(element==product){
        element.quantity+=1;
      }
    });
    return this.cart;
  }

  decreaseQuantity(product){
    if(product.quantity==1){
      this.removeFromCart(product);
    }
    else{
      this.totalPrice-=product.price;
      this.cart.forEach(element => {
        if(element==product){
          element.quantity-=1;
        }
      });
    }
    return this.cart;
    
  }

  constructor() {
   }
}
