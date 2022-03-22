import { Component, OnInit } from '@angular/core';

//in the second case of the input, you need to use property binding, cause {{}} cannot use bolean 
//instead of using [] you can bind by using bind-variable=""
@Component({
  selector: 'app-test-prop-bind',
  template: `
  <h2>
    welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Leo">
  <input [disabled]="isDisable" id="{{myId}}" type="text" value="Leo">
  <input bind-disabled="isDisable" id="{{myId}}" type="text" value="Leo">
  <h2>

  </h2>
  `,
  styleUrls: []
})
export class TestPropBindComponent implements OnInit {

  constructor() { }
  //atributes cant be changed, property values can
  public myId = "testId";
  public name = "leo";
  public isDisable = false;
  ngOnInit(): void {
  }

}
