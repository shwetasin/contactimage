import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'view',
    loadComponent: () => import('./view/view.page').then( m => m.ViewPage)
  },
  {
    path: 'edit',
    loadComponent: () => import('./edit/edit.page').then( m => m.EditPage)
  },
];
