import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems$;
  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/auth/cart/";

  email = sessionStorage.getItem("email")
  password = sessionStorage.getItem("password")

  getCartItems() {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});
    return this.http.get<Cart[]>(this.url + "uid/"+ this.email , {headers}) //filter from user

  }


  addToCart(cartItem: Cart) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});
    return this.http.post<Cart>(this.url + "add", cartItem, {headers})      
  }

  updateQty(item: Cart, qty: number) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    item.amount = item.amount + qty;
    console.log(item)
    return this.http.put<Cart>(this.url, item, {headers}).subscribe(item => console.log(item.amount))
  }

  deleteCartItemsByUser(email : string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.delete(this.url + "user/" + email, {headers});
  }

  deleteCartItem(id: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.delete(this.url + id, {headers});
  }

  addItemsToCart(cartItems: Cart[]) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.post<Cart>(this.url + "add/items", cartItems, {headers});

  }
}
