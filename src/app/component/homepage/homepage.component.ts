import { Component, OnInit } from '@angular/core';
import { SharedDataComponent } from 'src/app/shared/shared-data/shared-data.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  searchTerm: string = '';
  selectedRegion: string = '';
  uniqueRegions: string[] = [];
  filteredData: any;
  data: any = [];

  constructor(private sharedData: SharedDataComponent) {}

  ngOnInit(): void {
    this.data = this.sharedData.getData();
    this.uniqueRegions = Array.from(
      new Set(this.data.map((item: any) => item.region))
    );
    this.filterData();
  }

  filterData(): void {
    this.filteredData = this.data.filter((item: any) => {
      const matchesSearchTerm =
        !this.searchTerm ||
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRegion =
        !this.selectedRegion || item.region === this.selectedRegion;

      return matchesSearchTerm && matchesRegion;
    });
  }
}
