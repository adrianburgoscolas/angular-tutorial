import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private numItemsSource = new Subject<number>();

  numItems$ = this.numItemsSource.asObservable();

  items: Product[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  setBarNumItems() {
    this.numItemsSource.next(this.items.length);
  }

}
