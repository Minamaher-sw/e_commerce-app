import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  [x: string]: any;
  currentId:number =0;
  product:Iproducts|undefined ;

  constructor(private active:ActivatedRoute , private prdServices : ProductStatic){
    const idParam = this.active.snapshot.paramMap.get("id");
    this.currentId = idParam !== null ? +idParam : 0;

    let obj = this.prdServices.getProductsId(this.currentId);
    if(obj){
      this.product = obj;
    }
    else{
      this['route'].navigate(["**"])
    }
  }
}
