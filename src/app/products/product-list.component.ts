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
    showImage = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Product [];
    products: Product[] = [
        {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://www.allthingsclipart.com/05/rake.01.jpg'
    },
    {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'http://www.allthingsclipart.com/09/gold.mine.49.jpg'
    },
    {
        'productId': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'http://www.allthingsclipart.com/05/hammer.07.jpg'
    },
    {
        'productId': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.5,
        'imageUrl': 'http://www.allthingsclipart.com/04/saw.04.jpg'
    },
    {
        'productId': 10,
        'productName': 'Dualshock4 Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2015',
        'description': 'Standard two-button video game controller',
        'price': 59.95,
        'starRating': 4.9,
        'imageUrl': 'https://www.zapals.com/media/catalog/product/cache/1/image/ae5fcc3175343e35bab9cec427611d29/b/l/bluetooth_controller_wireless_gamepad_joystick_for_playstation_4_zp3061720522183_10__1_1_1.jpg'
    }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = '';
    }

    ngOnInit() {
        console.log('here');
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
