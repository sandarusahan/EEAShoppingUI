import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems$;
  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/cart/";

  getCartItems() {
    return this.http.get<Cart[]>(this.url+"all")
    // .subscribe(res => {
    //   this.cartItems$ = res;
    //   console.log(this.cartItems$)
    //   return this.cartItems$
    // }, err => {
    //   console.log(err)
    // });
  }

  addItemToCart(cartItem:Cart){
    return this.http.post<Cart>(this.url+"add", cartItem).
    subscribe(cartItem => {
      console.log(cartItem.name + " sucessfully added")
    },
    err => {
      console.log(cartItem.name + " Couldn't post"+ err)
    });

  }
}
