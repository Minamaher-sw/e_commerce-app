import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { Aboutus } from './components/aboutus/aboutus';
import { ProductParent } from './components/product-parent/product-parent';
import { Maincomponent } from './components/maincomponent/maincomponent';
import { ProductDetails } from './components/product-details/product-details';
import { TemplateDrivenSignup } from './components/template-driven-signup/template-driven-signup';

export const routes: Routes = [
  {
    path: "",
    component: Maincomponent,
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: Home, title: "Home Page" },
      { path: "aboutus", component: Aboutus, title: "Home Page" },
      { path: "products", component: ProductParent, title: "Home Page" },
      {path:"product-parent/:id",component:ProductDetails},
      {path:"signup" ,component:TemplateDrivenSignup}
    ]
  },
  { path: "**", component: Notfound, title: "not found" }
];
