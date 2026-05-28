export interface Booking {
  id: string;
  stayId: string;
  stayName: string;
  cityName: string;
  userName: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  bookingDate: Date;
}
