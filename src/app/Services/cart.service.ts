import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems$;
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080/cart/";

  getCartItems() {
    return this.http.get < Cart[] > (this.url + "all") //filter from user
    
  }

  addItemToCart(cartItemToAdd: Cart) {

    let item: Cart = null;
    this.getCartItems().subscribe(cartItems => {
      if (cartItems.length != 0) {
        cartItems.forEach(cartItem => {
          if (cartItem.name == cartItemToAdd.name) {
            this.updateQty(cartItem, cartItemToAdd.amount)
          } else {
            this.addToCart(cartItemToAdd)
          }

        });
      }else{
        this.addToCart(cartItemToAdd)
      }
    });


  }

  addToCart(cartItem:Cart) {
    return this.http.post < Cart > (this.url + "add", cartItem).
    subscribe(cartItem => {
        console.log(cartItem.name + " sucessfully added")
      },
      err => {
        console.log(cartItem.name + " Couldn't post" + err)
      });
  }

  updateQty(item: Cart, qty: number) {
    item.amount = item.amount + qty;
    console.log(item)
    return this.http.put <Cart> (this.url, item).subscribe(item => console.log(item.amount))
  }

  deleteCartItem(id: string){
    return this.http.delete(this.url+id);
  }
}
