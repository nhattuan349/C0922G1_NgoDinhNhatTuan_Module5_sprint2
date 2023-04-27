import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from '../dto/product-dto';
import {Product} from '../model/product';
import {Images} from '../model/images';

const PRODUCT_URL = 'http://localhost:8080/api/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProductDto(productName: string, page: number): Observable<ProductDto[]> {
    return this.httpClient.get<ProductDto[]>(PRODUCT_URL + `?keySearch1=` + productName + `&page=` + page);
  }


  findProductById(id: number):Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/api/product/findProductById/' + id)
  }

  getProductImage(id: number):Observable<Images[]> {
    return this.httpClient.get<Images[]>('http://localhost:8080/api/product/image/' + id )
  }

}
