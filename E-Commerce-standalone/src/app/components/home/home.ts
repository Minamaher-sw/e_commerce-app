import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";
import { ProductParent } from "../product-parent/product-parent";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Header, ProductParent, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
