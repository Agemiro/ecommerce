import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('@ecommerce/home').then((c) => c.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce/product-detail').then((c) => c.productDetailRoutes),
  },
];
