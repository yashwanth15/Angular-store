import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }
  cart=[];
  totalPrice=0;

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.cart=this.myservice.getCart();
    this.totalPrice=this.myservice.getTotalPrice();
  }

  removeFromCart(product){
    this.cart=this.myservice.removeFromCart(product);
    this.totalPrice=this.myservice.getTotalPrice();
  }

  increaseQunatity(prdouct){
    this.cart=this.myservice.increaseQunatity(prdouct);
    this.totalPrice=this.myservice.getTotalPrice();
  }

  decreaseQuantity(prdouct){
    this.cart=this.myservice.decreaseQuantity(prdouct);
    this.totalPrice=this.myservice.getTotalPrice();
  }

}
