import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class Productservice {

  constructor(private http: HttpClient) {}


  getAllProducts(){
    return this.http.get<Array<Products>>("http://localhost:3000/products");
  }


  handlechecked(prod:Products){
   return this.http.patch<Products>(
     `http://localhost:3000/products/${prod.id}`, {
      checked: !prod.checked

    })
  };


  handledelete2(p: any) {
    return this.http.delete(`http://localhost:3000/products/${p.id}`);

  }

  save(product: Products) {
    return this.http.post<Products>(`http://localhost:3000/products`,product)

  };

  searchproducts(keyword:string){
    return this.http.get<Products[]>(`http://localhost:3000/products?name_like=${keyword}`);
  }

  editproducts(p: Products) {
    return this.http.put(`http://localhost:3000/products/${p.id}`,p)

  }
}
