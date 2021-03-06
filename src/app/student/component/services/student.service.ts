import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Student } from '../models/student';


@Injectable()
export class StudentService{
	private studentUrl = 'app/data/school.json'; //URL to web API
	
	constructor (private http: Http) {}
	
	//Asynchronous call to get data from json file using Observable
	getStudents(): Observable<Student[]> {
		return this.http.get(this.studentUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	//Convert response to json
	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
	
	//Error handling
	private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
		const body = error.json() || '';
		const err = body.error || JSON.stringify(body);
		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
		errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}
}
