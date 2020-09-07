import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product.Model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  insideCart: Product[];
  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.insideCart = this.productService.getProductFromCart();
  }
  clearAll(){
    localStorage.clear();
  }

}
