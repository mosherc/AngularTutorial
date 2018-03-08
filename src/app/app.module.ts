import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductsDetailComponent } from './products/products-detail.component';
import { ProductGuardService } from './products/products-guard.service';
import { NotFoundComponent } from './products/not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        ProductsDetailComponent,
        WelcomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'products/not-found', component: NotFoundComponent },
            // must go before :id route because it is more specific,
            // otherwise loop
            { path: 'products/:id', component: ProductsDetailComponent,
                canActivate: [ProductGuardService] },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    providers: [ProductGuardService],
    bootstrap: [AppComponent]
})
export class AppModule {}
