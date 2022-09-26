import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> { // (<>) means (type assertion)
    return this.http.get<Product[]>("./assets/data.json") //get (request) to back-end API
  }

}
