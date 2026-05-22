import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Addproduct } from './addproduct/addproduct';
import { Edit } from './edit/edit';

export const routes: Routes = [
  {path:"home", component:Home},
  {path:"products", component:Product},
  {path:"addprod", component:Addproduct},
  {path:"edit/:id", component:Edit},
  {path:"",redirectTo:"/home",  pathMatch:"full"},

];
