import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: Product | undefined;
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.product = products.find(product => product.id === productIdFromRoute);
  }  

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartService.setBarNumItems();
    window.alert("Your product has been added to the cart!")
  }
}
