import { Cart } from './../Model/Cart';
import { CartService } from './../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList : Cart[]
  cartListLength
  total = 0;

  constructor(private cartService : CartService) { 
    this.cartService.getCartItems().subscribe(res => {
      this.cartList = res;
      this.cartListLength = this.cartList.length;
      this.calcTotal();
    })
  }

  ngOnInit() {
        
  }

  calcTotal() {
    for(let cartItem of this.cartList){
      this.total = cartItem.amount*cartItem.price + this.total;
    }
  }
}
