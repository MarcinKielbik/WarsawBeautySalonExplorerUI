import { Routes } from '@angular/router';
import { AddSalon } from './pages/add-salon/add-salon';
import { SalonComponent } from './pages/salon.component/salon.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'salons',
    pathMatch: 'full'
  },
  {
    path: 'salons',
    component:  SalonComponent
  },
  {
    path: 'add-salon',
    component: AddSalon
  },
//   {
//     path: '**',
//     redirectTo: 'salons'
//   },
  
];
