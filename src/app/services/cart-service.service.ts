import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService implements OnInit {
  cartItems = [];

  cartTotal = 0

  constructor() { }

  ngOnInit(){
 
  }

}
