import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private service : ProductService) { }

  ngOnInit() {
  }

  public onSubmit(product:Product) {
    
    console.log(product);
    return this.service.addProduct(product).subscribe(product => console.log(product.pName + " sucessfully added"));

  }

  
  public onImgSelected(event) {
    console.log(event);
    var form = document.createElement('input');
    form.style.display = 'none';
    form.type = 'file';
    form.name = 'file';
    document.getElementById('addProdFrm').appendChild(form);
    form.click();
  }

  
}
