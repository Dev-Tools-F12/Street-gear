import { Component, OnInit, ViewChild } from '@angular/core';
import {StreetGearService} from '../../../service/streetgear.service';
import { Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ProductComponent } from '../product/product.component';
import { CartService } from 'src/service/cart.service';
import { FormControl, FormGroup } from '@angular/forms';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[] =[];

  @ViewChild('basicModel') modal;
	modalRef: MDBModalRef;



 

  categories = ['T-shirts', 'Shorts', 'Jeans','Vest', 'Jewelty', 'Shades','Caps', 'Hoody', 'Other']; 
 

  constructor(private __productService:StreetGearService, private route:Router, private modalService: MDBModalService, public cart: CartService) { }

	searchForm: any = new FormGroup({
		search: new FormControl('')
	})



  ngOnInit(): void 
  {
    this.load();
  }

  load() 
  {
    this.__productService.getAllProducts().subscribe((detail:any)=>{
      this.products = detail;
      
    })

	}

  


  //my modal to add to cart
	openModel(product) 
  {
   
    this.__productService.setProduct(product);
		this.modalRef = this.modalService.show(ProductComponent);
	}







}