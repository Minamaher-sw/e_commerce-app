import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { ProductParent } from "../product-parent/product-parent";
import { UserAuth } from '../../services/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, ProductParent,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  isUserLoggedProp:boolean =false;
  userAuth = inject(UserAuth);
  router =inject(Router)
  constructor(){
    this.userAuth.userLoggedMethod().subscribe(data=>{
      this.isUserLoggedProp = data ;
    })
  }
  login(){
    this.router.navigate(["/login"])
  }
  logout(){
    this.userAuth.logout()
    this.router.navigate(["/login"])
  }
}
