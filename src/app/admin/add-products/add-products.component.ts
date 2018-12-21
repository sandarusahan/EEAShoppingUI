import { Category } from './../../Model/Category';
import { CategoryService } from './../../Services/category.service';
import { Product } from '../../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  categories : Category[] = [];
 

  constructor(private router : Router, private productService : ProductService, private categoryService : CategoryService) { }

  

  ngOnInit() {
    this.getCategories();
  }

  public onSubmit(product:Product) {
    
    console.log(product);
    let prod = this.productService.addProduct(product);
    this.router.navigate(['admin/products']);
    console.log(prod);

    return prod;
  }

  

  public getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.log("Error fetching categories " + err)
    });
  }

  
}
