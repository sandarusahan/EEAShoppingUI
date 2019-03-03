import { Cart } from './../Model/Cart';
import { CartService } from './../Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems$ : Observable<Cart[]>
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems()
    console.log(this.cartItems$)
  }

}
