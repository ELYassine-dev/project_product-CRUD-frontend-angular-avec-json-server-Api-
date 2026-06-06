import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { Appstate } from './appstate';
import { Loadingservice } from './loadingservice';

export const apphttpInterceptor: HttpInterceptorFn = (req, next) => {

  const appstate = inject(Appstate);
  const loadingservice = inject(Loadingservice);

  // loading state
  // appstate.setProductsState({
  //   status: 'loading'
  // });
  loadingservice.showloading();
  const request = req.clone({
    setHeaders: {
      Authorization: 'Bearer JWT'
    }
  });

  return next(request).pipe(
    finalize(() => {
      // appstate.setProductsState({
      //   status: 'loaded'
      // });
      loadingservice.hideloading();
    })
  );
};
