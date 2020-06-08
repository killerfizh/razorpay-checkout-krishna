import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaymentInfoService {

  totalAmount: number;
  isValid = false;
  detailsValid = false;
  details = {};

  constructor() { }

  getAmount(data){
    this.totalAmount = data;
  }

  getDetails(data){
    this.details = data;
  }
}
