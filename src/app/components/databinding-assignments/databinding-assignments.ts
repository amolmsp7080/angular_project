import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-assignments',
  imports: [],
  templateUrl: './databinding-assignments.html',
  styleUrl: './databinding-assignments.css',
})
export class DatabindingAssignments {
  flag: boolean = false;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
