import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"
  

  constructor(private http: HttpClient ) { }


  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    //.pipe(catchError(this.errorHandler)
  };
  //the URL is a training exemple.
  errorHandler(err: HttpErrorResponse) {
    return new Error(err.message || "Server Error!");
  };
};