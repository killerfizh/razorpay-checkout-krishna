import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentInfoService } from './payment-info.service';

@Injectable({
  providedIn: 'root'
})
export class LinkRazorpayGuard implements CanActivate {
  constructor(private amt:PaymentInfoService, private router:Router){}
  canActivate():boolean {
    if (this.amt.isValid || this.amt.detailsValid){
      return true;
    }
    else{
      this.router.navigate(["/"]);
      return false
    }
   
  }
  
}
