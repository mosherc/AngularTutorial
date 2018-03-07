import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Colin\'s Game List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = true;
    errorMessage: string;

    filteredProducts: Product [];
    products: Product[] = [];

    constructor(private _productService: ProductService) {
        // this short hand notation creates an instance of _productService, must have access keyword

        this.listFilter = '';
    }

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    ngOnInit() {
        // good for component initialization instead of constructor
        this._productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        // first convert to lowercase filter criteria for case insensitive comparison
        return this.products.filter((product: Product) =>
        // filter method will reduce array by making subarray where argument is true
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
            // does this filterBy exist in the array's product names? if !== 1 it does
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
