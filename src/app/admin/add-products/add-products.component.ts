import { Category } from './../../Model/Category';
import { CategoryService } from './../../Services/category.service';
import { Product } from '../../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  categories : Category[] = [];
  form;

  constructor(private productService : ProductService, private categoryService : CategoryService) { }

  imgUrl = "../../../assets/1534159621.png"

  ngOnInit() {
    this.getCategories();
    this.addImgElement();
  }

  public onSubmit(product:Product) {
    
    console.log(product);
    return this.productService.addProduct(product).subscribe(product => console.log(product.pName + " sucessfully added"));

  }

  public addImgElement() {
    var form = document.createElement('input');
    form.style.display = 'none';
    form.type = 'file';
    form.name = 'file';
    document.getElementById('addProdFrm').appendChild(form);
    this.form = form;
  }
  
  public onImgSelected(event) {
    console.log(event);
    this.form.click();
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.log("Error fetching categories " + err)
    });
  }

  
}
