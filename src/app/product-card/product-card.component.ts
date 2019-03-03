import { ProductService } from 'src/app/Services/product.service';

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Model/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  prod : Product;
  constructor(private router : Router, private productService : ProductService) { }

  ngOnInit() {
  }

  getProduct(productid) {
    //  this.router.navigate(["admin/products",product])
     console.log("product");
     console.log(productid);
    this.productService.getProduct(productid).subscribe(prod => {
      console.log(prod +"hooooo")
      this.prod = prod;
      this.router.navigate(['admin/products', prod.pId])
    }, err => {
      console.log(err);
    });
    
    //
  }
}
