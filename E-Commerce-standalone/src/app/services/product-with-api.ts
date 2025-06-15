import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  getPrdById(prd:number):Observable<Iproducts>{
    return this.http.get<Iproducts>(`http://localhost:3000/products/${prd}`);
  }
  getAllIds():Observable<string[]>{
    return this.getAllproducts().pipe(map((arrPrd)=>arrPrd.map((obj)=> obj.id)))
  }

  /**
   * Searches for products whose names include the specified search value (case-insensitive).
   *
   * @param value - The search string to filter product names by.
   * @returns An Observable emitting an array of `Iproducts` whose `productName` includes the search value.
   */
  // doSearch(value: string):Observable< Iproducts[]> {
  //   // value = value.toLowerCase();
  //   // return this.productsInService.filter((pro: Iproducts) => {
  //   //     return pro.productName.toLowerCase().includes(value);
  //   // });
  // //   return this.getAllproducts().pipe(map((arrPrd)=>arrPrd.filter((pro: Iproducts) => {
  // //         return pro.productName.toLowerCase().includes(value);
  // // })))
  // // return this.http.get<Iproducts[]>(`/api/products?search=${encodeURIComponent(value)}`);
  // console.log("hi");
  //   return this.http.get<Iproducts[]>(
  //   `http://localhost:3000/products?productName_like=${encodeURIComponent(value)}`
  // )
  // }
 doSearch(value: string): Observable<Iproducts[]> {
  const url = `http://localhost:3000/products?productName_like=${encodeURIComponent(value)}`;
  return this.http.get<Iproducts[]>(url);
}
}
