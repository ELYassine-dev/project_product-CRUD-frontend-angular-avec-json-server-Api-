import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Appstate } from './appstate';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient,
              private appstae:Appstate) {}

  async login(username: string, password: string) {
    let resp:any = await firstValueFrom(this.http.get('http://localhost:3000/users/' + username));
 // console.log(password);
 // console.log(resp.password);
 // console.log(atob(resp.password));
 //    console.log(resp);
 //    console.log(resp.token);
 //  if(password==atob(resp.password)){
 //    let decodedjwt=jwtDecode(resp.token);
 //    this.appstae.setAuth({
 //      isAuthenticated: true,
 //      username:decodedjwt.sub,
 //      token:resp.token,
 //    });
    return Promise.resolve(true);

  // }else{
  //   return Promise.reject('Invalid credentials');
  // }
  }
}
