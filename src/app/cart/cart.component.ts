import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  cart = [];
  totalPrice=0;
  constructor(private myservice: MyserviceService) { }

  addToCart(product){
    this.cart=this.myservice.addToCart(product);
    this.totalPrice=this.myservice.getTotalPrice();
  }

  ngOnInit() {
    this.items=this.myservice.getItems();
    this.cart=this.myservice.getCart();
    this.totalPrice=this.myservice.getTotalPrice();
  }

  onkeypress(value) {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("cart");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

}
