import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testeventbind',
  template: `
  <h2>Hello</h2>

  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
  
  <button (click)="greeting = 'Welcome'">Greet</button>
  
  `,
  styles: []
})
export class TesteventbindComponent implements OnInit {

  constructor() { }

  public name = "leo";
  public greeting = "";

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log(event);
    this.greeting = "Welcome to test " + event.type;
  }
}
