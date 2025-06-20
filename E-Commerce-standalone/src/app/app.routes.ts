import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Aboutus } from './components/aboutus/aboutus';
import { ProductParent } from './components/product-parent/product-parent';
import { Maincomponent } from './components/maincomponent/maincomponent';
import { ProductDetails } from './components/product-details/product-details';
import { TemplateDrivenSignup } from './components/template-driven-signup/template-driven-signup';
import { loginGuard } from './Guards/login-guard';
import { ReactiveLogin } from './components/reactive-login/reactive-login';

export const routes: Routes = [
  {
    path: "",
    component: Maincomponent,
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: Home, title: "Home Page" },
      { path: "aboutus", component: Aboutus, title: "Home Page" },
      { path: "products",
        component: ProductParent,
        title: "Home Page",
        canActivate: [loginGuard]
      },
      {path:"product-parent/:id",component:ProductDetails},
      {path:"signup" ,component:TemplateDrivenSignup},
      {path:"login" ,component:ReactiveLogin}
    ]
  },
  { path: "**", component: Notfound, title: "not found" }
];
