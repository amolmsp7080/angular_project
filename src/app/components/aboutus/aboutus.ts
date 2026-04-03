import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  router = inject(Router);
  doSomethingAndGoToHome() {
    console.log('Doing Something....');
    this.router.navigateByUrl('/home');
  }

  location = inject(Location);
  goToPreviousPage() {
    this.location.back();
  }
  goToNextPage() {
    this.location.forward();
  }
}
