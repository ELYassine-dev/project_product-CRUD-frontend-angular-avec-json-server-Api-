import { Component, OnInit } from '@angular/core';
import { Productservice } from '../services/productservice';
import { Products } from '../model/Products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  // product!: Array<any> ;
  product: Products[] = [];
  filteredProducts: Products[] = [];
  public keyword :string=""

  constructor(private prodservice: Productservice) {}

  ngOnInit() {
    this.allproducts();
  }

  allproducts() {
    this.prodservice.getAllProducts().subscribe({
      next: (data) => {
        this.product = data;
        this.filteredProducts = data
      },
      error: (error) => console.log(error),
    });
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
          this.product = this.product.filter((product) => product.id !== p.id);
        },
        error: (error) => console.log(error),
      });
    }
  }

  searchproducts() {
     this.prodservice.searchproducts(this.keyword).subscribe({
       next:data=> {
         this.product=data;
       },
       error: (error) => console.log(error),
     })
  }


  editproduct(p: Products) {
    this.prodservice.editproducts(p).subscribe({
      next: (data) => {
        this.allproducts();
      },
      error: (error) => console.log(error),
    })

  }





}
