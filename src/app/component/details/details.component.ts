import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataComponent } from 'src/app/shared/shared-data/shared-data.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  current_country: any;
  countryData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedData: SharedDataComponent,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.current_country = this.activatedRoute.snapshot.params['id'];
    this.countryData = this.sharedData.getCountryByName(this.current_country);
    console.log('--', this.countryData);
  }
  goBack(): void {
    this.location.back();
  }
}
