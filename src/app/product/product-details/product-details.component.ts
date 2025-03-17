import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { WbService } from '../../services/wb.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit{

  constructor(private apiCall:ApiCallService,private wb:WbService){

  }
  productData!:any[];
  ngOnInit(): void {
    let reqUrl = "product/getAll"
    let responseObservable = this.apiCall.getRequest(this.apiCall.mergeUrlWithApiUrl(reqUrl));
responseObservable.subscribe(response=>{
  this.productData = response;
  console.log( this.productData);
  
  })
  }

  
}
