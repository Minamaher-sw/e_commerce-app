import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  userLoginInfo:object ={}
  constructor() { }
  login(username:string,passowrd:string){
    let token ="12333444444444"
    localStorage.setItem("userToken",token)
  }

  logout(){
    localStorage.removeItem("userToken")
  }

  get isUserLogged():boolean{
    return (localStorage.getItem("userToken") ? true : false)
  }
}
