import { Component, OnInit } from '@angular/core';
import { Productservice } from '../services/productservice';
import { Products } from '../model/Products';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Appstate } from '../services/appstate';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  constructor(private prodservice: Productservice,
              private router:Router,
              public appstate:Appstate,
              ) {}

  ngOnInit() {
    this.allproducts();

      }

  allproducts() {
    // this.appstate.setProductsState({
    //   status:"loading",
    // });
    this.prodservice.getAllProducts(this.appstate.productstate.page,this.appstate.productstate.size).subscribe({
      next: (response) => {
        // this.appstate.productstate.product = response.data;
        // this.appstate.productstate.totalpages=response.pages;
        this.appstate.productstate.totalproducts=response;

        this.appstate.setProductsState({
          product: response.data,
          totalpages:response.pages,
          status:"loaded"

        })

      },

      error: (error) => {
        this.appstate.setProductsState({
          status:"error",
          errorMessage:error
        })
      }
    });
  }



  nextPage() {
    if (this.appstate.productstate.page < this.appstate.productstate.totalpages - 1) {
      this.appstate.productstate.page++;
      this.allproducts();
    }
  }

  prevPage() {
    if (this.appstate.productstate.page > 0) {
      this.appstate.productstate.page--;
      this.appstate.productstate.allproducts();
    }
  }












  checkpro(prod: Products) {
    return this.prodservice.handlechecked(prod).subscribe({
      next: () => {
        prod.checked = !prod.checked;
        // prod.checked=data.checked;
      },
      error: (error) => console.log(error),
    });
  }

  handledelete(p: Products) {
    if (confirm('do you want to delete this item!')) {
      this.prodservice.handledelete2(p).subscribe({
        next: () => {
          // this.allproducts();
          this.appstate.productstate.product = this.appstate.productstate.product.filter(
            (prod:any)=> prod.id !== p.id);
        },
        error: (error) => console.log(error),
      });
    }
  }

  searchproducts() {
     this.prodservice.searchproducts(this.appstate.productstate.keyword).subscribe({
       next:data=> {
         this.appstate.productstate.product=data;
       },
       error: (error) => console.log(error),
     })
  }


  editproduct(p: Products) {
    this.router.navigate(['/edit/', p.id]);


  }





}
