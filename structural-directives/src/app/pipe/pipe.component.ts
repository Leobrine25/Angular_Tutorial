import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:2:7}}</h2>
  <h2>{{person | json}}</h2>

  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>

  <h2>{{ 0.25 | percent}}</h2>
  <h2>{{ 0.25 | currency}}</h2>
  <h2>{{ 0.25 | currency:'BRL'}}</h2>
  <h2>{{ 0.25 | currency:'BRL' : 'code'}}</h2>

  <h2>{{ date }}</h2>
  <h2>{{ date | date: 'short'}}</h2>
  <h2>{{ date | date: 'shortDate'}}</h2>
  <h2>{{ date | date: 'shortTime'}}</h2>
  
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  public name = "Leobrine25"
  public message = "Hello my friend"
  public person={
    "firstName" : "Jhon",
    "lastName" : "Wick"
  }
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
