import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonStore } from '../../store/salon.store';
import { Salon } from '../../interfaces/salon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-edit-salon',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edit-salon.html',
  styleUrl: './edit-salon.scss',
})
export class EditSalon {
  form!: FormGroup;
  salonId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private salonStore: SalonStore
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      phoneNumber: [''],
      websiteUrl: [''],
      services: [''],
      priceRange: [''],
      rating: [null],
      reviewCount: [null]
    });
  }

  ngOnInit(): void {
    this.salonId = Number(this.route.snapshot.paramMap.get('id'));

    this.salonStore.getSalonById(this.salonId).subscribe({
      next: salon => this.form.patchValue(salon),
      error: error => console.error('Error loading salon', error)
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const salon: Salon = {
      ...this.form.value
    };

    this.salonStore.updateSalon(this.salonId, salon).subscribe({
      next: () => this.router.navigate(['', this.salonId]),
      error: error => console.error('Error updating salon', error)
    });
  }

  goToAll(): void {
    this.router.navigate(['/salons']);
  }
}
