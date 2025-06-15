import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  propSubject:BehaviorSubject<boolean> ;
  userLoginInfo:object ={}
  constructor() {
    this.propSubject =new BehaviorSubject<boolean>(false);
  }
  login(username:string,passowrd:string){
    let token ="12333444444444"
    localStorage.setItem("userToken",token)
    this.propSubject.next(true)
  }

  logout(){
    localStorage.removeItem("userToken")
    this.propSubject.next(false)
  }

  get isUserLogged():boolean{
    return (localStorage.getItem("userToken") ? true : false)
  }

  userLoggedMethod(){
    return this.propSubject.asObservable();
  }
}
