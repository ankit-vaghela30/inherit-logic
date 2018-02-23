webpackJsonp([2],{1001:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var s in e)t.hasOwnProperty(s)||(t[s]=e[s])}(s(983))},1002:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1),i=s(20),c=s(990),n=s(204),a=s(985),u=s(986),l=s(987),d=s(988),h=s(989);t.CourseRoutes=[{path:"",children:[{path:"create",component:a.CourseCreateComponent,data:{breadcrumbs:"Create new course"}},{path:":courseNum",resolve:{course:c.CourseResolver},data:{breadcrumbs:"{{course.courseNum}}"},children:[{path:"edit",component:l.CourseEditComponent},{path:":scenId",component:h.CourseScenarioComponent,resolve:{scenario:n.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"",component:u.CourseIndivComponent}]},{path:"",component:d.CourseListComponent}]}];let p=class{};p=r([o.NgModule({imports:[i.RouterModule.forChild(t.CourseRoutes)],exports:[i.RouterModule]})],p),t.CourseRouteModule=p},979:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1),i=s(63),c=s(985),n=s(986),a=s(987),u=s(988),l=s(989),d=s(442),h=s(1002),p=s(990);let f=class{};f=r([o.NgModule({imports:[i.SharedModule,h.CourseRouteModule],declarations:[c.CourseCreateComponent,n.CourseIndivComponent,a.CourseEditComponent,u.CourseListComponent,l.CourseScenarioComponent],entryComponents:[d.ConfirmDeleteDialogComponent],providers:[p.CourseResolver]})],f),t.CourseModule=f},983:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var s=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===s?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):s}},985:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(20),n=s(203),a=s(24);let u=class{constructor(e,t,s,r){this._courseService=e,this._router=t,this._route=s,this._authService=r,this.errorMessage="",this.courseDetails={}}ngOnInit(){this.admin=this._authService.getUser()}createCourse(){""===this.courseDetails.courseNum?this.errorMessage="Course number is required":this.subscription=this._courseService.createCourse(this.admin.id,this.courseDetails).subscribe(e=>{this._router.navigate(["../",e.courseNum],{relativeTo:this._route})},e=>{this.errorMessage=e.error.message})}ngOnDestory(){this.subscription&&this.subscription.unsubscribe()}};u=r([i.Component({selector:"course-create",templateUrl:"app/admin/course/course-create/course-create.template.html",styleUrls:["app/admin/course/course-create/course-create.style.css"]}),o("design:paramtypes",[n.CourseService,c.Router,c.ActivatedRoute,a.AuthenticationService])],u),t.CourseCreateComponent=u},986:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(20),n=s(10);s(68);const a=s(203),u=s(126),l=s(24),d=s(69),h=s(1001);let p=class{constructor(e,t,s,r,o){this._router=e,this._route=t,this._courseService=s,this._authService=r,this._scenarioService=o,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){let e=this._authService.getUser();this.paramObserver=this._route.params.subscribe(t=>{let s=t.courseNum;this._courseService.getCourse(e.id,s).takeUntil(this.isDestroyed$).subscribe(t=>{this.courseInfo=t,this._courseService.getStudents(e.id,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e.sort(h.sortStudents),this._scenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarios=e})})},e=>{this.errorMessage=d.readErrorMessage(e)})})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([i.Component({selector:"course-indiv",templateUrl:"app/admin/course/course-indiv/course-indiv.template.html",styleUrls:["app/admin/course/course-indiv/course-indiv.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,a.CourseService,l.AuthenticationService,u.ScenarioService])],p),t.CourseIndivComponent=p},987:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(20),n=s(127),a=s(10);s(68);const u=s(203),l=s(24),d=s(442),h=s(983),p=s(69);let f=class{constructor(e,t,s,r,o){this._router=e,this._route=t,this._courseService=s,this._authService=r,this._modalService=o,this.errorMessage="",this.isDestroyed$=new a.Subject}ngOnInit(){this._admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum;this._courseService.getCourse(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this._courseService.getPossibleInstructors(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.possibleInstr=e.sort(h.sortStudents)},e=>{this.errorMessage=p.readErrorMessage(e),this.possibleInstr=[]})},e=>{this.errorMessage=p.readErrorMessage(e)})})}onCancel(){this._router.navigate(["../"],{relativeTo:this._route})}update(){this._courseService.editCourse(this._admin.id,this.courseInfo.courseNum,this.courseInfo).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["../"],{relativeTo:this._route})},e=>{this.errorMessage=p.readErrorMessage(e)})}addInstructor(){this.selectedAdd&&this._courseService.addInstructor(this._admin.id,this.courseInfo.courseNum,this.selectedAdd).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this.possibleInstr=this.possibleInstr.filter(e=>e.userId!=this.selectedAdd)},e=>{this.errorMessage=p.readErrorMessage(e)})}deleteCourse(){const e=this._modalService.open(d.ConfirmDeleteDialogComponent,{size:"sm",windowClass:"delete-modal"});e.componentInstance.message="Are you sure you want to delete course "+this.courseInfo.courseNum+"?",e.result.then(e=>{"delete"===e&&this._callDeleteCourse()},e=>{})}_callDeleteCourse(){this._courseService.deleteCourse(this._admin.id,this.courseInfo.courseNum).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/courses"])},e=>{this.errorMessage=p.readErrorMessage(e)})}deleteCourseStudents(){const e=this._modalService.open(d.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete all students in course "+this.courseInfo.courseNum+"?",e.result.then(e=>{"delete"===e&&this._callDeleteCourseStudents()},e=>{})}_callDeleteCourseStudents(){this._courseService.deleteStudents(this._admin.id,this.courseInfo.courseNum).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/courses/",this.courseInfo.courseNum])},e=>{this.errorMessage=p.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};f=r([i.Component({selector:"course-edit",templateUrl:"app/admin/course/course-edit/course-edit.template.html",styleUrls:["app/admin/course/course-edit/course-edit.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,u.CourseService,l.AuthenticationService,n.NgbModal])],f),t.CourseEditComponent=f},988:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(203),n=s(24);let a=class{constructor(e,t){this._courseService=e,this._authService=t}ngOnInit(){let e=this._authService.getUser();this.subscription=this._courseService.listCourses(e.id).subscribe(e=>{this.courses=e})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};a=r([i.Component({selector:"course-list",templateUrl:"app/admin/course/course-list/course-list.template.html"}),o("design:paramtypes",[c.CourseService,n.AuthenticationService])],a),t.CourseListComponent=a},989:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(20),n=s(10);s(68);const a=s(203),u=s(126),l=s(24),d=s(441),h=s(69);let p=class{constructor(e,t,s,r,o,i){this._router=e,this._route=t,this._authService=s,this._courseService=r,this._studentService=o,this._scenarioService=i,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){this.admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum,s=e.scenId;this.courseNum=t.toUpperCase(),this._scenarioService.getScenario(s).takeUntil(this.isDestroyed$).subscribe(e=>{this.scenario=e,this._courseService.getScenarioStatus(this.admin.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e},e=>{this.errorMessage=h.readErrorMessage(e)})},e=>{this.errorMessage=h.readErrorMessage(e)})})}formatAccess(e){return e?"Access granted":"Access not granted"}grantAccess(e){let t=this.scenario.scenCode,s=this.students[e].userId;this._studentService.grantScenAccess(this.admin.id,s,t,!0).takeUntil(this.isDestroyed$).subscribe(s=>{void 0!==s&&null!==s&&(this.students[e].status=s.accessGranted[t])},e=>{this.errorMessage=e.error.message})}goToFridge(e){this._router.navigate(["/admin/students/",e,this.scenario.scenCode])}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([i.Component({selector:"course-scen",templateUrl:"app/admin/course/course-scenario/course-scenario.template.html",styleUrls:["app/admin/course/course-scenario/course-scenario.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,l.AuthenticationService,a.CourseService,d.StudentService,u.ScenarioService])],p),t.CourseScenarioComponent=p},990:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(0),n=s(203),a=s(24);let u=class{constructor(e,t){this._courseService=e,this._authService=t}resolve(e,t){let s=this._authService.getUser();const r=e.params.courseNum;return r?this._courseService.getCourse(s.id,r):new c.Observable}};u=r([i.Injectable(),o("design:paramtypes",[n.CourseService,a.AuthenticationService])],u),t.CourseResolver=u}});