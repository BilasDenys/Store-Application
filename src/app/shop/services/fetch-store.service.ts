import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductsInterface} from "../interfaces/Products";

@Injectable({
  providedIn: 'root',
})
export class FetchStoreService {
  constructor(private http: HttpClient) {}

  fetchAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  fetchAllProducts(): Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>('https://fakestoreapi.com/products');
  }

  fetchSelectedProduct(productId: string) {
    return this.http.get(`https://fakestoreapi.com/products/${productId}`);
  }

  fetchSingleProduct(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  fetchInCategory(category: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}
