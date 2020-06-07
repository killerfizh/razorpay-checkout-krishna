import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
   
    return this.http.get<Product[]>("https://5ed162594e6d7200163a0830.mockapi.io/rvsp/products")
  }
}
