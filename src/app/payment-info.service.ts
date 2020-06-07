import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {

  totalAmount: number;
  isValid = false;

  constructor() { }

  getAmount(data){
    this.totalAmount = data;
  }
}
