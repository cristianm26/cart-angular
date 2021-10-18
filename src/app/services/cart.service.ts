import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly URL = environment.api;
  carItemList: any = [];

  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>('');

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.carItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.carItemList.push(product);
    this.productList.next(this.carItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.carItemList.map((m: any) => {
      grandTotal += m.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.carItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.carItemList.splice(index, 1);
      }
    });
    this.productList.next(this.carItemList);
  }

  removeAllCart() {
    this.carItemList = [];
    this.productList.next(this.carItemList);
  }
}
