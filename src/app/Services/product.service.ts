import { Product } from './../Model/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/product/";

  getProducts() {
    return this.http.get<Product[]>(this.url+"getAll");
  }

  addProduct(product) {
    console.log(product);
    return this.http.post<Product>(this.url+"add", product);
  }
}
