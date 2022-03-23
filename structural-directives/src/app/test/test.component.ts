import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--All cases bellow are ngIF-->
  
  <h2 *ngIf="displayName; else Block">
    Name is not hidden
  </h2>

  <ng-template #Block>
  <h2>
    Name is hidden
  </h2>
  </ng-template>
  <!-- another way: -->

  <h2 *ngIf="displayName; then thenBlock; else elseBlock"></h2>

  <ng-template #thenBlock>
  <h2>
    Then
  </h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>
    else
  </h2>
  </ng-template>
  <!--All cases Above are ngIF-->
  `,
  styles: []
})
export class TestComponent implements OnInit {

  //displayName -> for ngIf
  displayName=true;
  constructor() { }
  

  ngOnInit(): void {
  }

}
