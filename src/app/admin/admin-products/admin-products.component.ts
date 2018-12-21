import { Product } from './../../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  // private products : Product[] = [];
  products$ 
  constructor(private prodService : ProductService) { 
    this.products$ = this.prodService.getProducts();
    // this.prodService.getProducts().subscribe(prods => {
    //   this.products = prods;
    // })
  }

  ngOnInit() {
  }

}
