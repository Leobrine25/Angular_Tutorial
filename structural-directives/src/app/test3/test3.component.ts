import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
  
  <div *ngFor="let color of colors; index as i; odd as o">
    <h2>{{i}} {{o}} {{color}}</h2>
  </div>

  `,
  styles: []
})
export class Test3Component implements OnInit {
  
  public colors = ["red", "green", "blue", "yellow"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
