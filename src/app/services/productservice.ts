import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Products } from '../model/Products';

@Injectable({
  providedIn: 'root',
})
export class Productservice {

  private host :string="http://localhost:3000/products";
  constructor(private http: HttpClient) {}


  getAllProducts(page:number=1,size:number=4){
    return this.http.get<any>
    (`${this.host}?_page=${page}&_per_page=${size}`);
  }


  handlechecked(prod:Products){
   return this.http.patch<Products>(
     `${this.host}/${prod.id}`, {
      checked: !prod.checked

    })
  };


  handledelete2(p: any) {
    return this.http.delete(`${this.host}/${p.id}`);

  }

  save(product: Products) {
    return this.http.post<Products>(`${this.host}`,product)

  };

  searchproducts(keyword:string){
    return this.http.get<Products[]>(`${this.host}?name=${keyword}`);
  }




  getProductsById(productId: number) {
    return this.http.get<Products>
    (`${this.host}/${productId}`);
  }



  updateproduct(prod: Products) {
    return this.http.put(`${this.host}/${prod.id}`,prod)

  }
}
