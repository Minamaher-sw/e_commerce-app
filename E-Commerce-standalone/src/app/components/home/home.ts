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
    this.isUserLoggedProp = this.userAuth.isUserLogged
  }
  login(){
    this.userAuth.login("mina","123333");
    this.isUserLoggedProp = this.userAuth.isUserLogged
  }
  logout(){
    this.userAuth.logout()
    this.isUserLoggedProp = this.userAuth.isUserLogged
  }

}
