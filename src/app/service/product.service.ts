import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../interface/product.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${environment.urlAPI}/product`);
  }

  addProduct(product: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(`${environment.urlAPI}/product`, product);
  }

  updateProduct(product: ProductModel): Observable<ProductModel>{
    return this.http.put<ProductModel>(`${environment.urlAPI}/product/${product.id}`, product);
  }

  deleteProduct(id: string | undefined): Observable<any>{
    return this.http.delete(`${environment.urlAPI}/product/${id}`);
  }
}
