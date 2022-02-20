import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../data/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  productForm: FormGroup = this.createProductForm();

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productService.getProduct(params['id']).subscribe(product => {
          this.productForm.patchValue(new Product(product));
        });
      }
    });
  }

  private createProductForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null]
    });
  }

  onSubmit() {
    if(this.productForm.valid) {
      let product = new Product(this.productForm.value);
      this.productService.saveProduct(product).subscribe(product => {
        this.productForm.patchValue(new Product(product));
        this.router.navigate(['/products/list']);
      });
    }
    
  }

}
