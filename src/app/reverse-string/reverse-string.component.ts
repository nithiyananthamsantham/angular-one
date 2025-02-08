import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent{

  product: Product[] = [];
  
  constructor(){
    


  }


  
  originalStr: String = "";
  reverseStr: String = "";

  
  reverse(){
    this.reverseStr = this.originalStr.split('').reverse().join('');

    this.product[0] = {
      productName : "iphone",
      category: "phone",
      price: "$5000"

    },
    this.product[1] = {
      productName : "iphone",
      category: "phone",
      price: "$5000"

    }
  }

}
