"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var student_1 = require("./models/student");
var student_service_1 = require("./services/student.service");
var StudentFormComponent = (function () {
    function StudentFormComponent(studentService) {
        this.studentService = studentService;
        this.mode = 'Observable';
        this.selected = new student_1.Student('', '', '', '', '');
        this.submitted = false;
        this.editMode = false;
    }
    StudentFormComponent.prototype.ngOnInit = function () { this.getStudents(); };
    StudentFormComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents()
            .subscribe(function (students) { return _this.students = students; }, function (error) { return _this.errorMessage = error; });
    };
    StudentFormComponent.prototype.showEditForm = function (student) {
        if (student !== null) {
            this.selected = student;
        }
        this.editMode = true;
    };
    StudentFormComponent.prototype.onSubmit = function (student) {
        this.submitted = true;
    };
    Object.defineProperty(StudentFormComponent.prototype, "diagnostic", {
        //TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.students); },
        enumerable: true,
        configurable: true
    });
    return StudentFormComponent;
}());
StudentFormComponent = __decorate([
    core_1.Component({
        selector: 'student-form',
        moduleId: module.id,
        templateUrl: './templates/student-form.component.html'
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentFormComponent);
exports.StudentFormComponent = StudentFormComponent;
//# sourceMappingURL=student-form.component.js.map