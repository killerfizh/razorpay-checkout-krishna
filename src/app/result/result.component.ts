import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../payment-info.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  obtData;
  constructor(public amt:PaymentInfoService, private router:Router, private toaster:ToastrService) {this.obtData = this.amt.details }
 
  ngOnInit() {
    
  }
  
noted(){
  if(confirm("Have you noted the reference IDs?")){
    this.router.navigate(["/"])
    this.toaster.success("Thanks for the purchase")
  }
  
}
}
