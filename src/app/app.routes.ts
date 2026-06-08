import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { Addproduct } from './addproduct/addproduct';
import { Edit } from './edit/edit';
import { Login } from './login/login';
import { Admintemplate } from './admintemplate/admintemplate';
import { authenticationGuard } from './guards/authentication-guard';
import { authorizationGuard } from './guards/authorization-guard';

export const routes: Routes = [
  {
    path:"admin", component:Admintemplate,canActivate:[authenticationGuard],children:[
      {path:'products', component:Product},
      {path:"addprod", component:Addproduct,canActivate:[authorizationGuard],
      data:{requiredRoles:'ADMIN'}},
      {path:"edit/:id", component:Edit,canActivate:[authorizationGuard],
        data:{requiredRoles:'ADMIN'}},
      {path:"home", component:Home},

    ]

  },

  {path:"login", component:Login},
   {path:'',redirectTo:'login',  pathMatch:'full'}

];
