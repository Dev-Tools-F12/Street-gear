import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	constructor(public cart: CartService) { }

  cartItems: any[] = [];


  ngOnInit(): void 
  {
    this.loadData();
  }

  loadData()
  {
		this.cartItems = this.cart.setOrGetLocalStorageData();
	}


	removeItem(item: any) 
  {
		this.cart.removeProducCart(item);
		this.loadData();
	}

	increase(item: any)
  {
		this.cart.increaseProductsQTYAndAmount(item);
		this.loadData();
	}

	decrease(item: any)
  {
		this.cart.decreaseProductsQTYAndAmount(item);
		this.loadData();
	}



}
