import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { LocalStorageService } from "../auth/local-storage.service";


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let localStorageService = inject(LocalStorageService);
  const token = localStorageService.get("stoom-token");
  
  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(request);
};
