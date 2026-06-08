import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { Appstate } from '../services/appstate';
import { inject } from '@angular/core';

export const authorizationGuard: CanActivateFn = (route, state) => {

  const appstate=inject(Appstate)
  const activateroute=inject(ActivatedRoute)

 // @ts-ignore
  if(appstate.authstate.roles.includes(route.data['requiredRoles'])){
   return true;
 }else{
   return false;

 }
};
