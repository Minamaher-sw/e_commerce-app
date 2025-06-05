import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../models/iproducts';
@Injectable({
  providedIn: 'root'
})
export class ProductWithApi {

  constructor(
    private http:HttpClient
  ) { }
  getAllproducts():Observable <Iproducts[]>{
    return this.http.get<Iproducts[]>("http://localhost:3000/products");
  }

  getPrdById(prd:number):Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>(`http://localhost:3000/products/${prd}`);
  }
}
