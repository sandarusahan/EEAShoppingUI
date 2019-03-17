import { Cart } from './../Model/Cart';
import { CartService } from './../Services/cart.service';
import { ProductService } from './../Services/product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product
 

  cart : Cart = <Cart>{};

  constructor(private route: ActivatedRoute, private prodcutService:ProductService, private cartService : CartService) { }

  ngOnInit() {

      

    this.route.paramMap.subscribe(param => {
      let id = param.get('id');
      this.prodcutService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    })
    

  }

  addToCart(product:Product) {
    
    let cart =<Cart> new Object();
    cart.pid = product.pId;
    cart.uid = "user 01";
    cart.amount = 10;
    cart.name = product.pName;
    cart.price = product.pPrice;
  
    this.cartService.addItemToCart(cart);
  }
}
