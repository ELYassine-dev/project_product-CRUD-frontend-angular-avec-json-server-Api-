import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Appstate } from '../services/appstate';



export const authenticationGuard: CanActivateFn =
  (route, state) => {
    const appstate=inject(Appstate)
    const router=inject(Router)

 if(appstate.authstate.isAuthenticate) {
   return true;
 }

else{
   router.navigate(['/login']);
   return false;
 }



};
