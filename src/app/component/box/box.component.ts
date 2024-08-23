import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() userData: any = {};

  ngOnInit(): void {
    this.cards();
  }
  cards() {
    console.log(this.userData);
  }

  cardClick() {
    this.router.navigate(['/country-detail', this.userData.name]);
  }
}
