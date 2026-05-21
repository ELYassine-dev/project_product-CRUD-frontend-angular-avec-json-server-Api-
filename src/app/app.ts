import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 currentactivate:any ;

  activite = [
    { title: "Home", route: "/home", icon: "bi bi-house" },
    { title: "Products", route: "/products", icon: "bi bi-activity" },
    { title: "Add New Prod", route: "/addprod", icon: "bi bi-plus" }
  ];

  activate(act:any) {
    this.currentactivate = act;
  }
}
