webpackJsonp([1],{872:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1),i=s(62),c=s(894),n=s(878),a=s(879),u=s(880),l=s(881),d=s(882),h=s(895),p=s(883);let f=class{};f=r([o.NgModule({imports:[i.SharedModule,h.CourseRouteModule],declarations:[c.CourseComponent,n.CourseCreateComponent,a.CourseIndivComponent,u.CourseEditComponent,l.CourseListComponent,d.CourseScenarioComponent],providers:[p.CourseResolver]})],f),t.CourseModule=f},875:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var s=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===s?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):s}},878:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(14),n=s(183),a=s(24);let u=class{constructor(e,t,s,r){this._courseService=e,this._router=t,this._route=s,this._authService=r,this.errorMessage="",this.courseDetails={}}ngOnInit(){this.admin=this._authService.getUser()}createCourse(){""===this.courseDetails.courseNum?this.errorMessage="Course number is required":this.subscription=this._courseService.createCourse(this.admin.id,this.courseDetails).subscribe(e=>{this._router.navigate(["../",e.courseNum],{relativeTo:this._route})},e=>{this.errorMessage=e.error.message})}ngOnDestory(){this.subscription&&this.subscription.unsubscribe()}};u=r([i.Component({selector:"course-create-cmp",templateUrl:"app/admin/course/course-create/course-create.template.html",styleUrls:["app/admin/course/course-create/course-create.style.css"]}),o("design:paramtypes",[n.CourseService,c.Router,c.ActivatedRoute,a.AuthenticationService])],u),t.CourseCreateComponent=u},879:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(14),n=s(10);s(68);const a=s(183),u=s(115),l=s(24),d=s(875);let h=class{constructor(e,t,s,r,o){this._router=e,this._route=t,this._courseService=s,this._authService=r,this._scenarioService=o,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){let e=this._authService.getUser();this.paramObserver=this._route.params.subscribe(t=>{let s=t.courseNum;this._courseService.getCourse(e.id,s).takeUntil(this.isDestroyed$).subscribe(t=>{this.courseInfo=t,this._courseService.getStudents(e.id,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e.sort(d.sortStudents),this._scenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarios=e})})},e=>{this.errorMessage=e.message})})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};h=r([i.Component({selector:"course-indiv-cmp",templateUrl:"app/admin/course/course-indiv/course-indiv.template.html",styleUrls:["app/admin/course/course-indiv/course-indiv.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,a.CourseService,l.AuthenticationService,u.ScenarioService])],h),t.CourseIndivComponent=h},880:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(14),n=s(10);s(68);const a=s(183),u=s(24),l=s(875),d=s(116);let h=class{constructor(e,t,s,r){this._router=e,this._route=t,this._courseService=s,this._authService=r,this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){this.admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum;this._courseService.getCourse(this.admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this._courseService.getPossibleInstructors(this.admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.possibleInstr=e.sort(l.sortStudents)},e=>{this.errorMessage=d.readErrorMessage(e),this.possibleInstr=[]})},e=>{this.errorMessage=d.readErrorMessage(e)})})}update(){this._courseService.editCourse(this.admin.id,this.courseInfo.courseNum,this.courseInfo).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["../"],{relativeTo:this._route})},e=>{this.errorMessage=d.readErrorMessage(e)})}addInstructor(){this.selectedAdd&&this._courseService.addInstructor(this.admin.id,this.courseInfo.courseNum,this.selectedAdd).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this.possibleInstr=this.possibleInstr.filter(e=>e.userId!=this.selectedAdd)},e=>{this.errorMessage=d.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};h=r([i.Component({selector:"course-edit-cmp",templateUrl:"app/admin/course/course-edit/course-edit.template.html",styleUrls:["app/admin/course/course-edit/course-edit.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,a.CourseService,u.AuthenticationService])],h),t.CourseEditComponent=h},881:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(183),n=s(24);let a=class{constructor(e,t){this._courseService=e,this._authService=t}ngOnInit(){let e=this._authService.getUser();this.subscription=this._courseService.listCourses(e.id).subscribe(e=>{this.courses=e})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};a=r([i.Component({selector:"course-list-cmp",templateUrl:"./app/admin/course/course-list/course-list.template.html"}),o("design:paramtypes",[c.CourseService,n.AuthenticationService])],a),t.CourseListComponent=a},882:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(14),n=s(10);s(68);const a=s(183),u=s(115),l=s(24),d=s(412),h=s(116);let p=class{constructor(e,t,s,r,o,i){this._router=e,this._route=t,this._authService=s,this._courseService=r,this._studentService=o,this._scenarioService=i,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){this.admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum,s=e.scenId;this.courseNum=t.toUpperCase(),this._scenarioService.getScenario(s).takeUntil(this.isDestroyed$).subscribe(e=>{this.scenario=e,this._courseService.getScenarioStatus(this.admin.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e},e=>{this.errorMessage=h.readErrorMessage(e)})},e=>{this.errorMessage=h.readErrorMessage(e)})})}formatAccess(e){return e?"Access granted":"Access not granted"}accessButtonClass(e){return{"btn btn-sm":!0,"btn-outline-secondary":e,"btn-outline-dark":!e}}accessButtonText(e){return e?"Revoke access":"Grant access"}toggleAccess(e){let t=this.students[e].status,s=this.scenario.scenCode,r=this.students[e].userId;this._studentService.grantScenAccess(this.admin.id,r,s,!t).takeUntil(this.isDestroyed$).subscribe(t=>{void 0!==t&&null!==t&&(this.students[e].status=t.accessGranted[s])},e=>{this.errorMessage=e.error.message})}goToFridge(e){this._router.navigate(["/admin/students/",e,this.scenario.scenCode])}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([i.Component({selector:"course-scen-smp",templateUrl:"app/admin/course/course-scenario/course-scenario.template.html",styleUrls:["app/admin/course/course-scenario/course-scenario.style.css"]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,l.AuthenticationService,a.CourseService,d.StudentService,u.ScenarioService])],p),t.CourseScenarioComponent=p},883:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(0),n=s(183),a=s(24);let u=class{constructor(e,t){this._courseService=e,this._authService=t}resolve(e,t){let s=this._authService.getUser();const r=e.params.courseNum;return r?this._courseService.getCourse(s.id,r):new c.Observable}};u=r([i.Injectable(),o("design:paramtypes",[n.CourseService,a.AuthenticationService])],u),t.CourseResolver=u},894:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1);s(68);let i=class{};i=r([o.Component({selector:"course-cmp",templateUrl:"app/admin/course/course.template.html"})],i),t.CourseComponent=i},895:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1),i=s(14),c=s(883),n=s(185),a=s(878),u=s(879),l=s(880),d=s(881),h=s(882);t.CourseRoutes=[{path:"",children:[{path:"create",component:a.CourseCreateComponent,data:{breadcrumbs:"Create new course"}},{path:":courseNum",resolve:{course:c.CourseResolver},data:{breadcrumbs:"{{course.courseNum}}"},children:[{path:"edit",component:l.CourseEditComponent},{path:":scenId",component:h.CourseScenarioComponent,resolve:{scenario:n.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"",component:u.CourseIndivComponent}]},{path:"",component:d.CourseListComponent}]}];let p=class{};p=r([o.NgModule({imports:[i.RouterModule.forChild(t.CourseRoutes)],exports:[i.RouterModule]})],p),t.CourseRouteModule=p}});