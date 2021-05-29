import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchStoreService {
  constructor(private http: HttpClient) {}

  //create sort method for fetching data from server with another price.
  fetchAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  fetchAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  fetchSingleProducts(productId: string) {
    return this.http.get(`https://fakestoreapi.com/products/${productId}`);
  }

  fetchSingleProduct(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  fetchInCategory(category: string) {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}
