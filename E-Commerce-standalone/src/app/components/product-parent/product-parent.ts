import { Component } from '@angular/core';
import { Product } from "../product/product";
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../models/iproducts';

@Component({
  selector: 'app-product-parent',
  imports: [Product ,FormsModule],
  templateUrl: './product-parent.html',
  styleUrl: './product-parent.css'
})
export class ProductParent {
  filterName !:string;
  productParentList:Iproducts[]=[];
  price !:number;
  addToCardParent(prd:Iproducts){
    let obj =this.productParentList.find(inobj => inobj.productId === prd.productId)
    if(obj){
      obj.productQuantity++;
      obj.productPrice =prd.productPrice * obj.productQuantity;
    }
    else{
      this.productParentList.push({...prd,productQuantity:1});
    }
  }
}
