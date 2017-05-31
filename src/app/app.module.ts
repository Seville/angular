import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { StudentFormComponent }  from './student/component/student-form.component';
import { StudentService }  from './student/component/services/student.service';


@NgModule({
  imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	JsonpModule
  ],
  declarations: [
	AppComponent,
	StudentFormComponent
  ],
  providers: [StudentService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
