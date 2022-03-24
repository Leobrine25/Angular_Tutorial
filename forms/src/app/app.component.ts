import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  topics = ['Angular','React','Vue']
  topicHasError = true;

  userModel = new User('rob','rob@test.com',5552227778,'default','morning',false)

  validateTopic(value:any){
    if (value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

}
