import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-assignments',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directive-assignments.html',
  styleUrl: './directive-assignments.css',
})
export class DirectiveAssignments {
  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];
  filter = 'all';

  filterTasksData() {  // getter function
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed == true)
    } else if (this.filter === 'pending') {
      return this.tasks.filter(task => task.completed == false)
    } else {
      return this.tasks;
    }
  }

  completedCount() {
    return this.tasks.filter(task => task.completed == true).length;
  }
  //Assignment-3 ================================
  cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];
  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }
  increaseQty(item: any) {
    item.qty++;
  }
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => {
      return total + (item.price * item.qty);
    }, 0);
  }

}
