import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { Productservice } from '../services/productservice';
import { Products } from '../model/Products';

@Component({
  selector: 'app-addproduct',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css',
})
export class Addproduct implements OnInit {
  // 1 way with formcontrole
  // addproductform: FormGroup=new FormGroup({
  //
  //   name:new FormControl("", [Validators.required]),
  //   price: new FormControl("0", [Validators.required]),
  //   checked: new FormControl(""),
  // });

  //2 way with formbuilder
  constructor(private fb: FormBuilder,private productservise:Productservice) {}

  addproductform!: FormGroup;

  ngOnInit(): void {
    this.addproductform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
      checked: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  saveproduct(){
    let product:Products = this.addproductform.value;
     this.productservise.save(product).subscribe({
       next:data=>{
       alert(JSON.stringify(data));
       },
       error:error=>console.log(error)
     });
  }
}
