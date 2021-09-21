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
  selected_contact? : any;

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

  onSelect(contact: any): void 
  {
    this.selected_contact = contact;

    console.log(this.selected_contact);

  }


}