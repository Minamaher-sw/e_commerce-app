import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { Iproducts } from '../../models/iproducts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  clinetName:string ="mina maher" ;
  togglImg :number = 0;
  totalOrderPrice:number =0 ;
  storeProperty: Store = new Store(
    "CUBA", ["Cairo", "sohag", "Paris"],
    "data:image/jpeg;base64,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")

    productList:Iproducts[] =[{
        productId: 1,
        productName: 'Apple iPhone 15',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 2,
        productName: 'Samsung Galaxy frontend ',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 3,
        productName: 'Apple iPhone 13',
        productImgUrl:
          'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
        productQuantity: 0,
        productPrice: 200,
        categoryId: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 4,
        productName: 'Samsung Galaxy ',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
        productQuantity: 1,
        productPrice: 200,
        categoryId: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 5,
        productName: 'OPPO Reno 12F 5G ',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 6,
        productName: 'iphone',
        productImgUrl:
          'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 2,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId:7,
        productName: 'iphone',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 3,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId: 8,
        productName: 'Reno 11F',
        productImgUrl:
          'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      },
      {
        productId:9,
        productName: 'iphone',
        productImgUrl:
          'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
        productQuantity: 20,
        productPrice: 200,
        categoryId: 1,
        productDetails:
          'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
          showImage:true
      }]

      toggle(obj:any){
        if(obj.showImage){
          obj.showImage = false
        }
        else{
          obj.showImage = true
        }
      }
      Buy(obj:any){
        obj.productQuantity--;
        this.totalOrderPrice +=obj.productPrice;
      }
  }
