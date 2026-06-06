import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Loadingservice {
  public isloading=new Subject<boolean>();

constructor() {
}

showloading(){
  this.isloading.next(true);
}
hideloading(){
  this.isloading.next(false);
}
}
