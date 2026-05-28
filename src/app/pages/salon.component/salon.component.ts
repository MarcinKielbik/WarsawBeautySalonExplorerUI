import { Component, OnInit } from '@angular/core';
import { SalonStore } from '../../store/salon.store';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { Salon } from '../../interfaces/salon';
import {MatTableModule} from '@angular/material/table';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-salon.component',
  imports: [
    MatTableModule, 
    AsyncPipe, 
    MatButtonModule, 
    MatToolbarModule, 
    RouterLink, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss',
})
export class SalonComponent implements OnInit {

  salons$!: Observable<Salon[]>;
  filteredSalons$!: Observable<Salon[]>;
  searchForm!: FormGroup;

  displayedColumns: string[] = [
    'name',
    'address',
    'district',
    'phoneNumber',
    'services',
    'priceRange',
    'rating',
    'reviewCount',
    'actions'
  ];

  constructor(
    private salonStore: SalonStore, 
    private router: Router,
    private fb: FormBuilder
  ) { 
     this.searchForm = this.fb.group({
      search: ['']
    });

  }


  ngOnInit(): void {
    this.salons$ = this.salonStore.salons$;

     this.filteredSalons$ = combineLatest([
      this.salons$,
      this.searchForm.get('search')!.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([salons, search]) => {
        const value = String(search).toLowerCase().trim();

        if (!value) {
          return salons;
        }

        return salons.filter(salon =>
          salon.name.toLowerCase().includes(value) ||
          salon.district.toLowerCase().includes(value) ||
          salon.address.toLowerCase().includes(value) ||
          salon.services?.toLowerCase().includes(value)
        );
      })
    );


    this.salonStore.loadSalons();
    
  }


  goToAddSalon(): void {
    this.router.navigate(['/add-salon']);
  }
}