import { Category } from './../Model/Category';
import { CategoryService } from './../Services/category.service';
import { ProductService } from './../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : ProductService, private catService : CategoryService) { }

  products : Product[] = [];
  contegories : Category[];

  ngOnInit() {
    this.getAllProducts();
    this.catService.getCategories().subscribe(categories => {
      // console.log(categories[2].name)
      this.contegories = categories})
  }

  public getAllProducts() {
    
    this.service.getProducts().subscribe(res =>{
      console.log("fetching products...");
      this.products = res;
      // console.log(this.products);
    }, err => {
      console.log("An error has occured during fethinh products from the server -> " + err);
    })
  }

  
}
