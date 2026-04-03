import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('users')) {
    return next(req).pipe(retry(2));
  } else {
    return next(req);
  }
};
