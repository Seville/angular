import { Component } from '@angular/core';

import { Student } from '../models/student';

@Component({
	selector: 'student-form',
	moduleId: module.id,
	templateUrl: 'student-form.component.html'
})

export class StudentFormComponent {
	
	model = new Student(20, 'John', 12, 'male');
	
	submitted = false;
	
	onSubmit(){ this.submitted = true; }
	
	//TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }
}
