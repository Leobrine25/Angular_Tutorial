import { Component } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './enrollement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  title = 'forms';
  topics = ['Angular','React','Vue']
  topicHasError = true;
  errorMsg ="";

  userModel = new User('rob','rob@test.com',5552227778,'default','morning',false)

  constructor(private _enrollementService: EnrollementService){};
  validateTopic(value:any){
    if (value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit(userForm:any){
    console.log(userForm);
    
    //this.submitted = true;
    //this._enrollementService.enroll(this.userModel)
    //.subscribe(
    //  (data: any) => console.log('sucess',data),
    //  (error: any) => this.errorMsg = error.statusText
    //)
  }

}
