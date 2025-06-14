import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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
  constructor(){
    // using subjct 
  this.userAuth.userLoggedMethod().subscribe({
      next:(data)=>{
        this.userLoggedInNav =data;
      }
    });
  }

}
