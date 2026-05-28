import { Routes } from '@angular/router';
import { AddSalon } from './pages/add-salon/add-salon';
import { SalonComponent } from './pages/salon.component/salon.component';
import { SalonDetails } from './pages/salon-details/salon-details';
import { EditSalon } from './pages/edit-salon/edit-salon';

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
  { 
    path: 'salons/:id', 
    component: SalonDetails 
  },
  { 
    path: 'salons/:id/edit', 
    component: EditSalon 
  },
  {
    path: '**',
    redirectTo: 'salons'
  },
  
];
