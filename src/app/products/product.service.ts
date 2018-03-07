import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Product } from './product';

@Injectable()
export class ProductService {

  private _productUrl = './api/products/products.json';
  // can be replaced with server url or api
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this._http.get<Product[]>(this._productUrl)
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
      console.error(err.message);
      return Observable.throw(err.message);
  }
}
