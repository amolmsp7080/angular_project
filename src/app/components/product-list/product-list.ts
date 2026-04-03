import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Textonly } from '../../custom_directives/textonly';
import { Disablepaste } from '../../custom_directives/disablepaste';
import { Disablerightclick } from '../../custom_directives/disablerightclick';
import { Zoomin } from '../../custom_directives/zoomin';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    Textonly,
    Disablepaste,
    Disablerightclick,
    Zoomin,
    RouterLink
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  p = 1;
  faStar = faStar;
  productArr = product_data;
  categorySet = new Set();

  constructor() {
    this.categorySet.add('all');
    for (let product of product_data) {
      this.categorySet.add(product.category);
    }
    console.log(this.categorySet);
  }

  filterProducts(event: any) {
    const selectedCategory = event.target.value;
    this.productArr = product_data.filter((product) => {
      return selectedCategory === 'all' || product.category === selectedCategory;
    });
  }

  searchProducts(event: any) {
    const searchText = event.target.value;
    this.productArr = product_data.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }

  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
  openAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openConfirm() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
