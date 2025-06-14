import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const loginGuard: CanActivateFn = (route, state) => {

  let userAuth =inject(UserAuth);
  let router =inject(Router)
  let isuserLogged :boolean =false ;
  userAuth.userLoggedMethod().subscribe(data=>{
    isuserLogged =data;
  });
  if(isuserLogged){
        return true ;
      }
  else{
    router.navigate(["/signup"])
    return false
  }
};
