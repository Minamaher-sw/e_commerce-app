import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-signup.html',
  styleUrl: './template-driven-signup.css'
})
export class TemplateDrivenSignup implements OnInit{
  userProp :Iuser ={} as Iuser;

  userService =inject(UserService);
  constructor(){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onSubmit(){
      console.log("hi");
      this.userService.addNewUser( this.userProp).subscribe({
      next:(data)=>{
        console.log(data)
      }
      })
    }
}
