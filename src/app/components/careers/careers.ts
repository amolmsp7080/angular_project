import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-careers',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {}
