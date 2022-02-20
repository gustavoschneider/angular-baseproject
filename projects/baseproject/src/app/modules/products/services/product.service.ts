import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/baseproject/src/environments/environment';
import { catchError, Observable, of } from 'rxjs';

import { Product } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product_api = environment.api.URL + '/products';
  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.product_api)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.product_api + '/' + id.toString())
      .pipe(
        catchError(this.handleError<Product>('getProduct'))
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.product_api, product)
      .pipe(
        catchError(this.handleError<Product>('createProduct'))
      )
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.patch(this.product_api, product)
      .pipe(
        catchError(this.handleError<any>('updateProduct'))
      )
  }

  deleteProduct(product: Product): Observable<any> {
    return this.httpClient.delete(this.product_api + '/' + product.id!.toString())
      .pipe(
        catchError(this.handleError<any>('deleteProduct'))
      );
  }




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
