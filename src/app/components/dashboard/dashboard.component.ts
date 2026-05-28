import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities$ = this.cityService.getCities();

  constructor(
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectCity(city: City): void {
    this.router.navigate(['/stays', city.id]);
  }
}
