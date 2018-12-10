import { Product } from './../Model/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/product/getAll";

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

}
