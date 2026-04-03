import { Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css',
  inputs:['categoryObj']
})
export class CategoryItem {
  categoryObj:any;
}
