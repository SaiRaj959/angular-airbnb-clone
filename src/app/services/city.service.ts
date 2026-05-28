import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models/city.model';
import { Stay } from '../models/stay.model';
import { CITIES } from '../data/cities.data';
import { STAYS } from '../data/stays.data';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<City[]> {
    return of(CITIES);
  }

  getStaysByCity(cityId: string): Observable<Stay[]> {
    const stays = STAYS.filter(stay => stay.cityId === cityId);
    return of(stays);
  }

  getCityById(cityId: string): Observable<City | undefined> {
    const city = CITIES.find(c => c.id === cityId);
    return of(city);
  }
}
