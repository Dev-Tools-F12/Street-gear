import { Component, OnInit } from '@angular/core';
import {StreetGearService} from '../../../service/streetgear.service';
import { CartService } from 'src/service/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private __productService:StreetGearService, private __cartService: CartService) { }

  iterm:any={};

  ngOnInit(): void 
  {
    this.iterm =  this.__productService.getProduct();
  }


	addToCart(product: any)
  {
		this.__cartService.addProducCart(product)
	}


}
