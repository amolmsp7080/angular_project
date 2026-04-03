import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  product: any;
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.product = params;
    });
  }
}
