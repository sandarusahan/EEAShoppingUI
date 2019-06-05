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
  dicountedPrice: number;
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

  promo(){
    if(this.prod.promotion != null){
     let promoPrice = this.prod.pPrice * this.prod.promotion.percentage
     this.dicountedPrice = this.prod.pPrice - promoPrice;
    }
  }

  addToCart(product:Product) {
    let email = sessionStorage.getItem('email');
    if(email == "no_user"){
      this.router.navigate(['login'])
    }else{
      let cart =<Cart> new Object();
      cart.product = product
      cart.userEmail = email;
      cart.amount = 1;
      
      this.cartService.addToCart(cart).subscribe(res => {
        console.log(res)
      });
    }
   
  }
}
