import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascdsc',
  templateUrl: './ascdsc.component.html',
  styleUrls: ['./ascdsc.component.css']
})
export class AscdscComponent implements OnInit {
  numberList = [];
  resultList= [];
  sortedList=[];
  dummyList=[];
  result;

  constructor() { }

  ngOnInit() {
    this.generateNum();
  }

  generateNum(){
    for(let i=0;i<6;i++){
      this.numberList.push(Math.floor((Math.random() * 100) + 1));
    }
  }

  ans(num1,num2,num3,num4,num5,num6){

      if(num1!=='' && num2!=='' && num3!=='' && num4!=='' && num5!=='' && num6!==''){
        this.resultList.push(num1,num2,num3,num4,num5,num6);
        this.result = "Right"
        this.dummyList = this.numberList;
        this.sortedList = this.dummyList.sort();
        console.log(this.sortedList)

        console.log(this.resultList);
        for(let i=0;i<6;i++){
          if(this.sortedList[i]!=this.resultList[i]){
            this.result = "Wrong";
            this.resultList = [];
          }
      }
      }
      
  }

  newQue(){
    this.numberList=[];
    this.generateNum();
  }
}
