import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';;
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductParent } from "./components/product-parent/product-parent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Footer, ProductParent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-Commerce-standalone';
}
