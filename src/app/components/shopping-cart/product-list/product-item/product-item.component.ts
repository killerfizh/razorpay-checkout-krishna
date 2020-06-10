import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(private msg: MessengerService, private toaster:ToastrService) { }
  detailsHidden = true;

  ngOnInit() {
    
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    this.toaster.success("Added to cart")
  }
  viewDetails(){
    this.detailsHidden = !this.detailsHidden
  }
}
