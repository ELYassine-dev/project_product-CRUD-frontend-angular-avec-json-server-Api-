import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../services/productservice';
import { Products } from '../model/Products';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
  productId!: number;
  productformgroup!: FormGroup;
  constructor(
    private activateroute: ActivatedRoute,
    private productservice: Productservice,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.productId = this.activateroute.snapshot.params['id'];
   this.loadProduct();}

  loadProduct(): void {


    this.productservice.getProductsById(this.productId).subscribe({
      next: (data) => {
        this.productformgroup = this.fb.group({
          id: [data.id],
          name: [data.name,Validators.required],
          price: [data.price,Validators.required],
          checked:[data.checked],
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateprod() {
    let prod:Products=this.productformgroup.value;
    this.productservice.updateproduct(prod).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
      },
      error: (error) => {console.log(error)},
    });
  }
}
