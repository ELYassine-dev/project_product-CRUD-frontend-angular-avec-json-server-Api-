import { Injectable, OnInit } from '@angular/core';
import { Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class Appstate{

  public productstate:any={
   product:[],
   keyword :"",
   totalpages:0,
   size:3,
   page:1,
    totalproducts:0,
    status:"",
    errorMessage:""

}


  public setProductsState(state:any)
  {
    this.productstate=
      {...this.productstate,...state};
  }




}
