import { CategoryService } from './../../Services/category.service';
import { Category } from './../../Model/Category';
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
  category : Category
  constructor(private prodService : ProductService, private catService : CategoryService) { 
    this.products$ = this.prodService.getProducts();
    // this.prodService.getProducts().subscribe(prods => {
    //   this.products = prods;
    // })
  }

  ngOnInit() {
  }

  addCategory() {
    
    var categoryName = prompt("Enter new category name");
    console.log(categoryName);
    if(categoryName!=null || categoryName != ""){
      // this.category.name = categoryName;
      this.catService.addCategory(categoryName);
    }
  }

}
