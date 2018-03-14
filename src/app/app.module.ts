import { SignupComponent } from './forms/signup/signup.component';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductGuardService } from './products/products-guard.service';
import { ProductModule } from './products/product.module';
import { MyFormsModule } from './forms/forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        SignupComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'customer', component: CustomerComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
        ProductModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
