import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class-bind',
  template: `
  <h2>
    Hello {{name}}
  </h2>
  <h2 class="text-success">code1</h2>
  <h2 [class]=successClass>code2</h2>

  <h2 class="text-special" [class]="successClass">code3</h2>
  <h2 [class.text-danger]="hasError">code4</h2>

  <h2 [ngClass]="messageClasses">Code 5</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style: italic;
  }`]
})
export class TestClassBindComponent implements OnInit {

  constructor() { }

  public name= "leo";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  ngOnInit(): void {
  }

}
