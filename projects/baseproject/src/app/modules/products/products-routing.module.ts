import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsDetailComponent } from './routes/products-detail/products-detail.component';
import { ProductsListComponent } from './routes/products-list/products-list.component';

const routes: Routes = [{
  path: '', component: ProductsComponent,
  children: [
    { path: 'list', component: ProductsListComponent },
    { path: 'detail/:id', component: ProductsDetailComponent },
    { path: 'detail', component: ProductsDetailComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
