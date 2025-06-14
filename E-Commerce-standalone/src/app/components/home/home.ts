import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { ProductParent } from "../product-parent/product-parent";
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-home',
  imports: [Header, ProductParent,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  isUserLoggedProp:boolean =false;
  userAuth = inject(UserAuth);

  constructor(){
    this.userAuth.userLoggedMethod().subscribe(data=>{
      this.isUserLoggedProp = data ;
    })
  }
  login(){
    this.userAuth.login("mina","123333");
  }
  logout(){
    this.userAuth.logout()
  }
}
