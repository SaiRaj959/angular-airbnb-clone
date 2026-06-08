import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookingService } from '../../services/booking.service';
import { Stay } from '../../models/stay.model';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss'],
})
export class BookingDialogComponent implements OnInit {
  stay: Stay;
  cityName: string;
  userName: string = '';
  checkInDate: string = '';
  checkOutDate: string = '';
  currentImageIndex: number = 0;
  totalNights: number = 0;
  totalPrice: number = 0;

  constructor(
    @Inject(MatDialogRef)
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookingService: BookingService
  ) {
    this.stay = data.stay;
    this.cityName = data.cityName;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    const today = new Date();
    this.checkInDate = this.formatDate(today);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.checkOutDate = this.formatDate(tomorrow);

    this.calculatePrice();
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  calculatePrice(): void {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(this.checkOutDate);
    this.totalNights = Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
    this.totalPrice = this.totalNights * this.stay.price;
  }

  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.stay.images.length;
  }

  previousImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.stay.images.length) %
      this.stay.images.length;
  }

  bookNow(): void {
    if (!this.userName.trim() || !this.checkInDate || !this.checkOutDate) {
      alert('Please fill in all fields');
      return;
    }

    const booking: Booking = {
      id: '',
      stayId: this.stay.id,
      stayName: this.stay.name,
      cityName: this.cityName,
      userName: this.userName,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      totalPrice: this.totalPrice,
      bookingDate: new Date(),
    };

    this.bookingService.addBooking(booking).subscribe((result) => {
      console.log('Booking added:', result);
    });

    this.bookingService.getBookings().subscribe((bookings) => {
      console.log('Current bookings:', bookings);
    });

    this.bookingService.addBooking(booking).subscribe((result) => {
      console.log('Duplicate booking trigger');
    });

    setTimeout(() => {
      this.dialogRef.close(true);
    }, 100);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
