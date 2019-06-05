import { Product } from './../Model/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/product/";
  // prod : Product = null;
  email = sessionStorage.getItem("email")
  password = sessionStorage.getItem("password")
  getProducts() {
    return this.http.get<Product[]>(this.url+"public/all");
  }

  getProductsByCategory(catId){
    return this.http.get<Product[]>(this.url+"public/category/"+catId)
  }

  getProduct(pid)  {
    
    return this.http.get<Product>(this.url+pid);
    
  }

  addProduct(product: Product) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.post<Product>(this.url+"auth/add", product, {headers});
  }

  deleteProduct(pid){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.delete(this.url+"auth/"+pid, {headers});
  }
}
