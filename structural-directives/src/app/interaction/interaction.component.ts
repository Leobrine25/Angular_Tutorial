import { Component, Input, OnInit, Output, EventEmitter,} from '@angular/core';


@Component({
  selector: 'app-interaction',
  template: `
  
  <h2>{{"hello " + parentData}}</h2>

  <button (click)="fireEvent()">Send event</button>
  
  `,
  styles: []
})
export class InteractionComponent implements OnInit {

  @Input() public parentData= "";

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("hey My Guy");
  }

}
