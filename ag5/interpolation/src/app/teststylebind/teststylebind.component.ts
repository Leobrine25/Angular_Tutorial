import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teststylebind',
  template: `
  <h2> Hello Test</h2>
  <h2 [style.color]="'orange'"> style 1</h2>
  <h2 [style.color]="hasError ? 'red' : 'green' ">style 2</h2>
  <h2 [style.color]="highlightColor"> style 3</h2>
  <h2 [ngStyle]="titleStyle"> style 4</h2>`,
  styles: []
})
export class TeststylebindComponent implements OnInit {

  constructor() { }

  public name = "leo";
  public hasError = "true";
  public isSpecial = "true";
  public highlightColor = "orange";
  public titleStyle = {
      color:"blue",
      fontStyle: "italic",
  }

  ngOnInit(): void {
  }

}
