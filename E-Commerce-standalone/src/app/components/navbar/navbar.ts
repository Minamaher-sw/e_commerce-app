import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  userLoggedInNav :boolean =false;
  userAuth=inject(UserAuth)
  router =inject(Router)
  constructor(){
    // using subjct
  this.userAuth.userLoggedMethod().subscribe({
      next:(data)=>{
        this.userLoggedInNav =data;
      }
    });
  }
  login(){
    this.router.navigate(["/login"])
  }
  logout(){
    this.userAuth.logout();
    this.router.navigate(["/login"])
  }
}
