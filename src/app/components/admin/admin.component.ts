import { Component, OnInit } from '@angular/core';
import {StreetGearService} from '../../../service/streetgear.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit 
{
  products:any[] =[];

  productsToList:any={};

  displayedImage : any;

    //currently selected Product
  //to be edited
  selectedIterm:any=[];


  constructor(private __productService:StreetGearService) { }

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

  openModel(productsToList,productDataUp: NgForm) 
  {

     productDataUp.controls.price.setValue(productsToList.price);
     productDataUp.controls.name.setValue(productsToList.name);
     productDataUp.controls.category.setValue(productsToList.category);

     this.displayedImage = productsToList.image;
  
  }
  


}
