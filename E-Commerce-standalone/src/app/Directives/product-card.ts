import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard implements OnChanges, OnInit{

  @Input() raduisValue:string ="";

  constructor( public elem:ElementRef)  {
  }

  @HostListener("mouseover") mouseover(){
    this.elem.nativeElement.style.boxShadow = "5px 4px 2px 0 rgba(0,0,0,0.2)";
  }
  @HostListener("mouseout") mouseout(){
    this.elem.nativeElement.style.boxShadow = "0 0 0 0";
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.elem.nativeElement.style.borderRadius = this.raduisValue;
    // this.elem.nativeElement.style.borderRadius = "30px";
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.elem.nativeElement.style.borderRadius = "30px";
  }
}
