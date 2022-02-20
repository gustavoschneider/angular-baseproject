import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './routes/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UiModule
  ]
})
export class ProductsModule { }
