import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-maincomponent',
  imports: [Navbar, Footer,RouterOutlet],
  templateUrl: './maincomponent.html',
  styleUrl: './maincomponent.css'
})
export class Maincomponent {

}
