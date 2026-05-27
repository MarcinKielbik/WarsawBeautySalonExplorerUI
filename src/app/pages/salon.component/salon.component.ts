import { Component, OnInit } from '@angular/core';
import { SalonStore } from '../../store/salon.store';
import { Observable } from 'rxjs';
import { Salon } from '../../interfaces/salon';
import {MatTableModule} from '@angular/material/table';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-salon.component',
  imports: [MatTableModule, AsyncPipe, MatButtonModule, MatToolbarModule],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss',
})
export class SalonComponent implements OnInit {

  salons$!: Observable<Salon[]>;

  displayedColumns: string[] = [
    'name',
    'address',
    'district',
    'phoneNumber',
    'services',
    'priceRange',
    'rating',
    'reviewCount'
  ];

  constructor(private salonStore: SalonStore, private router: Router) { }


  ngOnInit(): void {
    this.salons$ = this.salonStore.salons$;

    this.salonStore.loadSalons();
    
  }


  goToAddSalon(): void {
    this.router.navigate(['/add-salon']);
  }
}
