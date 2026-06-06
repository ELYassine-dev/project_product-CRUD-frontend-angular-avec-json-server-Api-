import { Component } from '@angular/core';
import { Appstate } from '../services/appstate';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public appstate: Appstate) {}

  totalcheckedproducts() {
    return this.appstate.productstate.product.filter((p: any) => p.checked==true);
  }
}
