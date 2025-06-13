import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from '../../models/iproducts';
import { ProductStatic } from '../../services/product-static';
import { ProductWithApi } from '../../services/product-with-api';

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
    private prdServices: ProductWithApi,
    private router: Router,
    private cdr:ChangeDetectorRef
  ) {
    // const idParam = this.active.snapshot.paramMap.get('id');
    // this.currentId = idParam !== null ? +idParam : 0;

  }
  ngOnInit(): void {

    // this.currentId = Number(this.active.snapshot.paramMap.get("id"));

    this.active.paramMap.subscribe((data)=>{
      this.currentId =Number(data.get("id"));
      this.prdServices.getAllIds().subscribe({
        next:(data)=>{
          this.allids = data.map((id)=> Number(id));
          console.log(this.allids)
        }
      });
      this.currentIndex = this.allids.indexOf(this.currentId);

      this.prdServices.getPrdById(this.currentId).subscribe({
        next :(data)=>{
          this.product = data;
          this.cdr.detectChanges();
        },
        complete:()=>{

        },
        error:()=>{

        }
      })
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
