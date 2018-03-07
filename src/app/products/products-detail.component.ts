import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
