import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Product } from '../../data/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  data: Product[] = [];
  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.data = products;
    });
  }

}
