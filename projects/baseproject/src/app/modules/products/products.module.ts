import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './routes/products-list/products-list.component';
import { ProductsDetailComponent } from './routes/products-detail/products-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UiModule
  ]
})
export class ProductsModule { }
