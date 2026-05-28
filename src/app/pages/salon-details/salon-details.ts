import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Salon } from '../../interfaces/salon';
import { SalonStore } from '../../store/salon.store';

@Component({
  selector: 'app-salon-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './salon-details.html',
  styleUrl: './salon-details.scss',
})
export class SalonDetails implements OnInit {
    salon$!: Observable<Salon>;

  constructor(
    private route: ActivatedRoute,
    private salonStore: SalonStore,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.salon$ = this.salonStore.getSalonById(id);
  }


  goToAll(): void {
    this.router.navigate(['/salons']);
  }
}