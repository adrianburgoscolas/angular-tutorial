import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numItems$ = new Observable<number>((subscriber) => {
    this.setBarNumItems = () => subscriber.next(this.items.length);
  });

  private items: Product[] = [];
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

  setBarNumItems!: Function;
}
