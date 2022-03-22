import { Component, OnInit } from '@angular/core';


/* selector can be 3 ways:
  "app-test" as a custom html tag <app-test></app-test>
  ".app-test" as a custom html class <div class="app-test"></div>
  "[app-test]" as a custom atribute <div app-test> </div>

*/
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
