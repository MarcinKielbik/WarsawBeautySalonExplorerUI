import { Injectable } from '@angular/core';
import { Salon } from '../interfaces/salon';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SalonService {

  private readonly apiUrl = 'http://localhost:5227/api/Salons';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Salon[]> {
    return this.http.get<Salon[]>(this.apiUrl);
  }

  addSalon(salon: Salon): Observable<Salon> {
    return this.http.post<Salon>(this.apiUrl, salon);
  }
}
