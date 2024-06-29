import { Routes } from '@angular/router';
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { Page404Component } from "./auth/page-404/page-404.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";

export const APP_ROUTE: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTE),
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/page.routes').then(r => r.PAGE_ROUTE),
  },
  {
    path: '**',
    component: Page404Component,
  }
];
