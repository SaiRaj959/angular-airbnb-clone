import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];
  private bookingsSubject = new BehaviorSubject<Booking[]>([]);

  constructor() {
    this.loadBookingsFromStorage();
  }

  getBookings(): Observable<Booking[]> {
    return this.bookingsSubject.asObservable();
  }

  addBooking(booking: Booking): Observable<Booking> {
    const newBooking: Booking = {
      ...booking,
      id: this.generateId(),
      bookingDate: new Date()
    };
    this.bookings.push(newBooking);
    this.bookingsSubject.next([...this.bookings]);
    this.saveBookingsToStorage();
    return of(newBooking);
  }

  private generateId(): string {
    return 'booking-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  private saveBookingsToStorage(): void {
    localStorage.setItem('bookings', JSON.stringify(this.bookings));
  }

  private loadBookingsFromStorage(): void {
    const stored = localStorage.getItem('bookings');
    if (stored) {
      this.bookings = JSON.parse(stored);
      this.bookingsSubject.next([...this.bookings]);
    }
  }
}
