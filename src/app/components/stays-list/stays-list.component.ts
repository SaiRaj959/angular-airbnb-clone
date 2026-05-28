import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CityService } from '../../services/city.service';
import { BookingService } from '../../services/booking.service';
import { Stay } from '../../models/stay.model';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stays-list',
  templateUrl: './stays-list.component.html',
  styleUrls: ['./stays-list.component.scss']
})
export class StaysListComponent implements OnInit, OnDestroy {
  stays: Stay[] = [];
  cityId: string = '';
  cityName: string = '';
  private subscription: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService,
    private bookingService: BookingService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['cityId'];
      this.loadCityAndStays();
    });

    // BUG #1: MEMORY LEAK - Subscribe to bookings without unsubscribing
    this.subscription = this.bookingService.getBookings().subscribe(bookings => {
      // This subscription is never cleaned up, causing memory leak on each navigation
      console.log('Bookings updated:', bookings);
    });
  }

  private loadCityAndStays(): void {
    this.cityService.getCityById(this.cityId).subscribe(city => {
      if (city) {
        this.cityName = city.name;
      }
    });

    this.cityService.getStaysByCity(this.cityId).subscribe(stays => {
      this.stays = stays;
    });
  }

  openBookingDialog(stay: Stay): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '600px',
      data: { stay, cityName: this.cityName }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // BUG #2: BROKEN CHANGE DETECTION - Mutating stay object directly
        // This mutation doesn't trigger change detection since we're mutating the object
        // The correct approach would be to create a new object
        stay.price = 0; // Mark as booked by setting price to 0 (broken logic)

        // This won't update the UI because Angular's change detection doesn't catch mutations
        // unless we use OnPush strategy or manually trigger detection
        console.log('Stay booked but UI won\'t update due to direct mutation');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy(): void {
    // BUG #1 EXPOSED: If we didn't fix it, this would never be called
    // The memory leak is that we're not unsubscribing from booking service
    // This should be: if (this.subscription) this.subscription.unsubscribe();
  }
}
