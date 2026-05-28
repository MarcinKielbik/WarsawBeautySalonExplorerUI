import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Salon } from '../../interfaces/salon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalonStore } from '../../store/salon.store';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-salon',
  imports: [MatFormFieldModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-salon.html',
  styleUrl: './add-salon.scss',
})
export class AddSalon {
  form!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private salonStore: SalonStore,
     private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      phoneNumber: [''],
      websiteUrl: [''],
      services: [''],
      priceRange: [''],
      rating: [null as number | null],
      reviewCount: [null as number | null]
    });
  }



  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const salon: Salon = {
      name: this.form.value.name!,
      address: this.form.value.address!,
      district: this.form.value.district!,
      phoneNumber: this.form.value.phoneNumber || undefined,
      websiteUrl: this.form.value.websiteUrl || undefined,
      services: this.form.value.services || undefined,
      priceRange: this.form.value.priceRange || undefined,
      rating: this.form.value.rating ?? undefined,
      reviewCount: this.form.value.reviewCount ?? undefined
    };

    this.salonStore.addSalon(salon);
    this.form.reset();
  }


  goToAll(): void {
    this.router.navigate(['/salons']);
  }
}
