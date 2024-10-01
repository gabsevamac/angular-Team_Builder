import { HttpInterceptorFn } from '@angular/common/http';
import { SpinnerLoaderService } from '../spinner-loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';



export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(SpinnerLoaderService)
  console.log(`${req.url} is comming!`)
  loader.show()
  return next(req).pipe(
    finalize( ()=> {
      loader.hide()
    })
  );
};
