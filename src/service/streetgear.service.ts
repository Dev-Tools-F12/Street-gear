import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})

export class StreetGearService 
{
	constructor(private __http: HttpClient) { }

	url = "http://localhost:3000/api/products";


	headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });


	getAllProducts() 
	{
		return this.__http.get(this.url);
	}

}