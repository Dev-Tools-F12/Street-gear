import { Component, OnInit } from '@angular/core';
import {StreetGearService} from '../../../service/streetgear.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[] =[];


 

  categories = ['T-shirts', 'Shorts', 'Jeans','Vest', 'Jewelty', 'Shades','Caps', 'Hoody', 'Other']; 
 

  constructor(private __productService:StreetGearService, private route:Router) { }

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






}