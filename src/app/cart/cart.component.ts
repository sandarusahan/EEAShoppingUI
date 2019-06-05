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

  userEmail = sessionStorage.getItem("email");
  cartItems : Cart[];
  total = 0
  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems
      // this.cartItems = (this.userId) ? this.products.filter(p=>p.pName.toLowerCase().includes(query.toLowerCase()) || p.pDescription.toLowerCase().includes(query.toLowerCase())) : this.products;

      this.calcTotal();
    })
    
  }

  deleteCartItem(pid){
    this.cartService.deleteCartItem(pid).subscribe(res => this.cartItems = <Cart[]>res);
    
  }

  onQtyChange(units, i){
    if(units != null)
    this.cartItems[i].amount = units;
    this.total = 0
    this.cartService.addItemsToCart(this.cartItems).subscribe(res => {
      console.log(res);
    })
    this.calcTotal();
  }

  calcTotal() {
    for(let cartItem of this.cartItems){
      this.total = cartItem.amount*cartItem.product.pPrice + this.total;
    }
  }

  
  

}
