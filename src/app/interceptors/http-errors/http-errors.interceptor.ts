import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  const clonedRequest = req.clone({
    setHeaders: {
      'x-access-token': 'MEU_TOKEN',
    },
  });
  return next(clonedRequest).pipe(
    catchError((error) => {
      snackBar.open('Ops, there was an error', 'Close', {
        duration: 5000,
      });
      return throwError(() => error); // PASSA O ERRO PRA FRENTE
    })
  );
};
