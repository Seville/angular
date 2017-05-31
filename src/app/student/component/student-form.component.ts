import { Component, OnInit } from '@angular/core';

import { Student } from './models/student';

import { StudentService } from './services/student.service';

@Component({
	selector: 'student-form',
	moduleId: module.id,
	templateUrl: './templates/student-form.component.html'
})

export class StudentFormComponent implements OnInit {
	errorMessage: string;
	students: Student[];
	mode = 'Observable';
	
	constructor (private studentService: StudentService){}
	
	ngOnInit() { this.getStudents();}
	
	getStudents() {
		this.studentService.getStudents()
			.subscribe(
				students => this.students = students,
				error => this.errorMessage = <any>error
			);
			
	} 
	
	enableEditMode(student){
		this.selected = student;
		this.editMode = true;
	}
	
	selected = new Student(0, "Jane", 12, "female", "unknown");
	
	submitted = false;
	
	editMode = false;
	
	onSubmit(){ 
		this.submitted = true; 
	}
	

	
	//TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.students); }
}
