import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You choose Red</div>
    <div *ngSwitchCase="'blue'">You choose Blue</div>
    <div *ngSwitchCase="'green'">You choose Green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>
  `,
  styles: []
})
export class Test2Component implements OnInit {

  public color = "green";
  constructor() { }

  ngOnInit(): void {
  }

}
