import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testeventbind',
  template: `
  <h2>Hello {{name}}</h2>

  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
  
  <button (click)="greeting = 'Welcome'">Greet</button>
  

  <h2>template reference</h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>

  <h2>Two way binding</h2>
  <input [(ngModel)]="nameBind" type="text">
  {{nameBind}}
  `,
  styles: []
})
export class TesteventbindComponent implements OnInit {

  constructor() { }

  public name = "leo";
  public greeting = "";
  public nameBind = "";

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log(event);
    this.greeting = "Welcome to test " + event.type;
  }

  logMessage(event:any){
    console.log(event);
  }
}
