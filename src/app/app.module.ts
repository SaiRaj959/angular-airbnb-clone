import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StaysListComponent } from './components/stays-list/stays-list.component';
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StaysListComponent,
    BookingDialogComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
