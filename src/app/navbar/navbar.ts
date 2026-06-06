import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Appstate } from '../services/appstate';
import { Loadingservice } from '../services/loadingservice';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  currentactivate: any;

  constructor(
    public appstate: Appstate,
    public loadingservice: Loadingservice,
  ) {}

  activite = [
    { title: 'Home', route: '/home', icon: 'bi bi-house' },
    { title: 'Products', route: '/products', icon: 'bi bi-activity' },
    { title: 'Add New Prod', route: '/addprod', icon: 'bi bi-plus' },
  ];

  activate(act: any) {
    this.currentactivate = act;
  }
}
