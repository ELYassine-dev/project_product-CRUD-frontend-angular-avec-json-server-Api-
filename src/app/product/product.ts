import { Component, OnInit } from '@angular/core';
import { Productservice } from '../services/productservice';
import { Products } from '../model/Products';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  // product!: Array<any> ;
  product: Products[] = [];
  // filteredProducts: Products[] = [];
  public keyword :string=""
  totalpages:number=0;
  pagesize:number=3;
  currentpage:number=1;

  constructor(private prodservice: Productservice,
              private router:Router) {}

  ngOnInit() {
    this.allproducts();
  }

  allproducts() {
    this.prodservice.getAllProducts().subscribe({
      next: (response) => {
        this.product = response.body as Products[];
        // let totalproducts:number=parseInt(response.headers.get('x-total-count')!);
        // this.totalpages = Math.floor(totalproducts/this.pagesize);
        // if(totalproducts%this.pagesize!=0){
        //   this.totalpages=this.totalpages +1;
        // }
        // // this.filteredProducts = data
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
    this.router.navigate(['/edit/', p.id]);
    this.prodservice.updateproduct(p).subscribe({
      next: (data) => {
        this.allproducts();
      },
      error: (error) => console.log(error),
    })

  }





}
