import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  num1: number;
  num2: number;
  result: string;
  constructor() { }

  ngOnInit() {
    this.newQue();
  }
  newQue(){
    this.num1 = Math.floor((Math.random() * 10000) + 1);
    this.num2 = Math.floor((Math.random() * 10000) + 1);
    this.result='';
  }
  onClick(value){
    this.result='';
    if(value ==='lessThen'){
      if(this.num1<this.num2){
        this.result = 'Right';
      }else {
        this.result = 'Wrong';
      }
    }else if(value ==='greaterThen'){
      if(this.num1>this.num2){
        this.result = 'Right';
      }else {
        this.result = 'Wrong';
      }
    }else{
        if(this.num1>this.num2){
          this.result ='Right';
        }else {
          this.result = 'Wrong';
        }
      }
      console.log(this.result);
    }
}
