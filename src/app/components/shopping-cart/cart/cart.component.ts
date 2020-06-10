import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { PaymentInfoService } from 'src/app/payment-info.service';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = this.cs.cartItems;

  cartTotal = this.cs.cartTotal;

  isHidden = true;

  constructor(private msg: MessengerService, private amt:PaymentInfoService, private router:Router, public cs:CartServiceService) {
    
   }

   getBilled(){
    this.router.navigate(["/rzp"]);
     this.amt.getAmount(this.cs.cartTotal);
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
    
    if (this.cs.cartItems[index].qty == 1){
      console.log("qty1")
      this.cs.cartTotal -= this.cs.cartItems[index].price;
      this.cs.cartItems.splice(index, 1);
    }
    else{
      console.log("qty many")
      this.cs.cartItems[index].qty--;
      this.cs.cartTotal -= 1*this.cs.cartItems[index].price;
    }
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cs.cartItems) {
      if (this.cs.cartItems[i].productId === product.id) {
        this.cs.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cs.cartItems.push({
        productId: product.id,
        productName: product.product_name,
        qty: 1,
        price: product.product_price
      })
    }
    this.cs.cartTotal = 0;
    this.cs.cartItems.forEach(item => {
      this.cs.cartTotal += (item.qty * item.price)
    })
  }

}
