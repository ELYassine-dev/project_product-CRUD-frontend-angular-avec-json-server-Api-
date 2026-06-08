import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Appstate } from '../services/appstate';
import { Loadingservice } from '../services/loadingservice';
import { AsyncPipe } from '@angular/common';
import { Login } from '../login/login';

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
    private router:Router
  ) {}

  activite = [
    { title: 'Home', route: '/admin/home', icon: 'bi bi-house' },
    { title: 'Products', route: '/admin/products', icon: 'bi bi-activity' },
    { title: 'Add New Prod', route: '/admin/addprod', icon: 'bi bi-plus' },
  ];

  activate(act: any) {
    this.currentactivate = act;
  }

  logout() {
    // this.appstate.authstate ={};
     this.router.navigate(['/login']);
  }

  protected readonly Login = Login;

  login() {
    this.router.navigate(['/login']);

  }
}
