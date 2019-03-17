import { CartService } from './../Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/Product';
import { Router } from '@angular/router';
import { Cart } from '../Model/Cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  prod : Product;
  constructor(private router : Router, private productService : ProductService, private cartService: CartService) { }

  ngOnInit() {
  }

  gotoProduct(productid) {
    //  this.router.navigate(["admin/products",product])
     console.log("product");
     console.log(productid);
    this.productService.getProduct(productid).subscribe(prod => {
      // console.log(prod +"hooooo")
      this.prod = prod;
      this.router.navigate(['products', prod.pId])
    }, err => { 
      console.log(err);
    });
    
    //
  }

  addToCart(product:Product) {
    
    let cart =<Cart> new Object();
    cart.pid = product.pId;
    cart.uid = "user 01";
    cart.amount = 1;
    cart.name = product.pName;
    cart.price = product.pPrice;
  
    console.log(cart.name);

    this.cartService.addItemToCart(cart);
  }
}
