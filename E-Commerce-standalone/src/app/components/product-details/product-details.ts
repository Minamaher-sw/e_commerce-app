import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']  // Corrected typo: `styleUrl` ➝ `styleUrls`
})
export class ProductDetails implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  currentId: number = 0;
  product: Iproducts | undefined;
  currentIndex!: number;
  allids: number[] = [];

  constructor(
    private active: ActivatedRoute,
    private prdServices: ProductStatic,
    private router: Router
  ) {
    // const idParam = this.active.snapshot.paramMap.get('id');
    // this.currentId = idParam !== null ? +idParam : 0;

  }
  ngOnInit(): void {
    this.active.paramMap.subscribe((data)=>{
      this.currentId =Number(data.get("id"));
      this.allids = this.prdServices.getAllIds();
      this.currentIndex = this.allids.indexOf(this.currentId);

      const obj = this.prdServices.getProductsId(this.currentId);
      if (obj) {
        this.product = obj;
      } else {
        this.router.navigate(['**']);
      }
    })
  }
  prev(){
    if (this.currentIndex > 0) {

      this.router.navigate(['/product-parent', this.allids[--this.currentIndex]]);
    }
  }

  next() {
    if (this.currentIndex <( this.allids.length - 1)) {
      this.router.navigate(['/product-parent', this.allids[++this.currentIndex]]);
    }
  }
}
