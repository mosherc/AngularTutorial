import { AppComponent } from './../app.component';
import { ProductService } from './product.service';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { ProductsDetailComponent } from './products-detail.component';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { ProductGuardService } from './products-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/not-found', component: NotFoundComponent },
      // must go before :id route because it is more specific,
      // otherwise loop
      { path: 'products/:id', component: ProductsDetailComponent,
        canActivate: [ProductGuardService] },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,
    NotFoundComponent
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }
