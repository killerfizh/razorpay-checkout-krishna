import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { PaymentInfoService } from 'src/app/payment-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  isHidden = true;

  constructor(private msg: MessengerService, private amt:PaymentInfoService, private router:Router) {
    
   }

   getBilled(){
    this.router.navigate(["/rzp"]);
     this.amt.getAmount(this.cartTotal);
     this.amt.isValid = true;
   }
  
   showDiv(){
    this.isHidden = !this.isHidden;
   }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  clear(index){
    
    if (this.cartItems[index].qty == 1){
      
      this.cartTotal -= this.cartItems[index].price;
      this.cartItems.splice(index, 1);
    }
    else{
      this.cartItems[index].qty--;
      this.cartTotal -= 1*this.cartItems[index].price;
    }
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.product_name,
        qty: 1,
        price: product.product_price
      })
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
