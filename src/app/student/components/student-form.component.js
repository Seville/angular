"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var student_1 = require("../models/student");
var StudentFormComponent = (function () {
    function StudentFormComponent() {
        this.model = new student_1.Student(20, 'John', 12, 'male');
        this.submitted = false;
    }
    StudentFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(StudentFormComponent.prototype, "diagnostic", {
        //TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return StudentFormComponent;
}());
StudentFormComponent = __decorate([
    core_1.Component({
        selector: 'student-form',
        moduleId: module.id,
        templateUrl: 'student-form.component.html'
    })
], StudentFormComponent);
exports.StudentFormComponent = StudentFormComponent;
//# sourceMappingURL=student-form.component.js.map