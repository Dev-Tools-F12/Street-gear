import { Component, OnInit } from '@angular/core';
import {StreetGearService} from '../../../service/streetgear.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private __productService:StreetGearService) { }

  iterm:any={};

  ngOnInit(): void 
  {
    this.iterm =  this.__productService.getProduct();
  }


	addToCart(product: any)
  {
		console.log(product);
	}


}
