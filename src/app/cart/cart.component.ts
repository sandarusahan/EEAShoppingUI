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

  userId = "user 01"
  cartItems : Cart[];
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems
      // this.cartItems = (this.userId) ? this.products.filter(p=>p.pName.toLowerCase().includes(query.toLowerCase()) || p.pDescription.toLowerCase().includes(query.toLowerCase())) : this.products;
    })
    
  }

}
