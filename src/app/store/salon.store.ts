import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Salon } from '../interfaces/salon';
import { SalonService } from '../services/salon.service';



@Injectable({
    providedIn: 'root'
})
export class SalonStore {
    private readonly salonsSubject = new BehaviorSubject<Salon[]>([]);

    salons$ = this.salonsSubject.asObservable();

    constructor(private salonApiService: SalonService) { }

    loadSalons(): void {
        this.salonApiService.getAll().subscribe({
            next: salons => this.salonsSubject.next(salons),
            error: error => console.error('Error loading salons', error)
        });
    }




    addSalon(salon: Salon): void {
        this.salonApiService.addSalon(salon).subscribe({
            next: createdSalon => {
                const currentSalons = this.salonsSubject.value;
                this.salonsSubject.next([...currentSalons, createdSalon]);
            },
            error: error => console.error('Error adding salon', error)
        });
    }



    getSalonById(id: number): Observable<Salon> {
        return this.salonApiService.getById(id);
    }

    updateSalon(id: number, salon: Salon): Observable<void> {
        return this.salonApiService.updateSalon(id, salon);
    }
}