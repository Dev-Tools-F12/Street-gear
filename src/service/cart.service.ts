import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CartService 
{

	constructor() { }

    cartItems: any[] = [];


    setOrGetLocalStorageData() 
    {
		// Get items from local storage
		let data = localStorage.getItem('CART');

		// Set local Storage to be an empty array if I does not exits, else set the cartItems to data from local storage
		if (data === null) 
        {
			localStorage.setItem('CART', JSON.stringify([]))
		}
		else 
        {
			this.cartItems = JSON.parse(data)
			return this.cartItems
		}
	}

    addProducCart(product: any) 
    {
		product = { ...product, count: 1 }
		product = { ...product, total: product.price * product.count };

		let findItem = this.cartItems.filter(item => item._id === product._id);

		if (findItem.length > 0) {
			return
		}
		
		this.cartItems.push(product);
		localStorage.setItem('CART', JSON.stringify(this.cartItems));
	}

    removeProducCart(product: any) 
    {
		this.cartItems = this.setOrGetLocalStorageData();
		this.cartItems = this.cartItems.filter((item: any) => item._id !== product._id)
		localStorage.setItem('CART', JSON.stringify(this.cartItems));	
	}


    countTotalCartItemsAndAmount()
    {
		let total = 0;
		this.cartItems = this.setOrGetLocalStorageData();
	
		for (const index in this.cartItems) {
			total = this.cartItems[index].total + total
		}

		return {"total_items": this.cartItems.length, "total_amoumt": total};
	}

    totalProductPriceAndQTY(product: any)
    {
		console.log(product);
	}

    increaseProductsQTYAndAmount(product: any)
    {
		this.cartItems = this.setOrGetLocalStorageData();
		this.cartItems.map(item => {
			if (item._id === product._id){
				item.count += 1;
				item.total = item.count * item.price;
			}
		});
		
		localStorage.setItem('CART', JSON.stringify(this.cartItems));	
	}


    decreaseProductsQTYAndAmount(product: any)
    {
		this.cartItems = this.setOrGetLocalStorageData();
		this.cartItems.map(item => {
			if (item._id === product._id){
				item.count -= 1;
				item.total = item.count * item.price;
			}
		});
		localStorage.setItem('CART', JSON.stringify(this.cartItems));
	}







}