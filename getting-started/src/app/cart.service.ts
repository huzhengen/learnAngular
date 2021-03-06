import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) { }

  addToCart(product: object) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    console.log(this.http)
    // return this.http.get('../assets/shipping.json');
    return this.http.get('../assets/shipping.json');
  }
}
