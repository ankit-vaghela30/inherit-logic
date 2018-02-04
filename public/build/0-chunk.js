webpackJsonp([0],{1002:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n(20),o=n(990),a=n(991),u=n(992),c=n(204),d=n(993);t.StudentRoutes=[{path:"",children:[{path:":studentId",resolve:{student:d.StudentResolver},data:{breadcrumbs:"{{ student.firstName }} {{ student.lastName }}"},children:[{path:":scenId",component:u.StudentFridgeComponent,resolve:{scenario:c.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"",component:a.StudentIndivComponent}]},{path:"",component:o.StudentListComponent}]}];var l=function(){function e(){}return e=r([s.NgModule({imports:[i.RouterModule.forChild(t.StudentRoutes)],exports:[i.RouterModule]})],e)}();t.StudentRouteModule=l},1003:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StudentRolesArray=[{key:"student",label:"Student",value:0},{key:"instr",label:"Instructor",value:1},{key:"admin",label:"Administrator",value:2}]},1004:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=function(){function e(){}return e.prototype.formatPhageType=function(){if(this.phage){this.phage.phageType;return"user"===this.phage.phageType&&this.phage.submitted?"SUBMISSION":this.phage.phageType.toUpperCase()}return""},r([i.Input(),s("design:type",Object)],e.prototype,"phage",void 0),e=r([i.Component({selector:"student-phage",templateUrl:"app/admin/student/student-fridge/student-phage.template.html"}),s("design:paramtypes",[])],e)}();t.StudentPhageComponent=o},1005:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n(981),o=function(){function e(){}return e.prototype.transform=function(e){var t=i.ScenarioGlobals.deletionGuessLength,n="",r=-1;for(var s in e){var o=+s;if(r<0&&e[o])r=t*o;else if(r>0&&!1===e[o]){n+=""===n?"":", ",n+=r+" - "+t*o,r=-1}}return-1!=r&&(n+=""===n?"":", ",n+=r+" - "+i.ScenarioGlobals.geneLength),""===n?"None":n},e=r([s.Pipe({name:"phageGuesses"})],e)}();t.PhageGuessesPipe=o},1006:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=function(){function e(){}return e.prototype.transform=function(e){for(var t="",n=0,r=e;n<r.length;n++){var s=r[n];t+=""===t?"":", ",t+=("minusOne"===s.kind?"-1":"+1")+" at "+s.location}return t},e=r([s.Pipe({name:"phageMutations"})],e)}();t.PhageMutationsPipe=i},1007:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=function(){function e(){}return e.prototype.transform=function(e){for(var t="",n=e.length%2==0?e.length:e.length-1,r=0;r<n;r+=2)t+=r>1?", ":"",t+=e[r]+" - "+e[r+1];return t},e=r([s.Pipe({name:"phageDeletions"})],e)}();t.PhageDeletionsPipe=i},979:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n(63),o=n(1002),a=n(990),u=n(991),c=n(992),d=n(1004),l=n(441),f=n(993),p=n(1005),h=n(1006),v=n(1007),g=function(){function e(){}return e=r([s.NgModule({imports:[i.SharedModule,o.StudentRouteModule],declarations:[a.StudentListComponent,u.StudentIndivComponent,c.StudentFridgeComponent,d.StudentPhageComponent,p.PhageGuessesPipe,h.PhageMutationsPipe,v.PhageDeletionsPipe],entryComponents:[l.ConfirmDeleteDialogComponent],providers:[f.StudentResolver]})],e)}();t.StudentModule=g},981:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScenarioGlobals={numPhage:1e6,plateCapacity:1500,plexerCapacity:200,nFridgeShelf:32,nFridgeSpots:16,defaultLabDilution:10,defaultPlexerDilution:5,geneLength:350,deletionGuessLength:10}},982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var n=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===n?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):n}},990:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(10),a=n(440),u=n(24),c=n(69),d=n(982),l=function(){function e(e,t){this._studentService=e,this._authService=t,this.errorMessage="",this.isDestroyed$=new o.Subject}return e.prototype.ngOnInit=function(){var e=this,t=this._authService.getUser();this._studentService.listStudents(t.id).takeUntil(this.isDestroyed$).subscribe(function(t){e.students=t.sort(d.sortStudents)},function(t){e.errorMessage=c.readErrorMessage(t)})},e.prototype.ngOnDestroy=function(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()},e=r([i.Component({selector:"student-list",templateUrl:"./app/admin/student/student-list/student-list.template.html"}),s("design:paramtypes",[a.StudentService,u.AuthenticationService])],e)}();t.StudentListComponent=l},991:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(20),a=n(127),u=n(10);n(68);var c=n(24),d=n(440),l=n(126),f=n(1003),p=n(441),h=n(69),v=function(){function e(e,t,n,r,s,i){this._router=e,this._route=t,this._authService=n,this._studentService=r,this._scenarioService=s,this._modalService=i,this.roles=f.StudentRolesArray,this.errorMessage="",this.isDestroyed$=new u.Subject}return e.prototype.ngOnInit=function(){var e=this;this._admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(function(t){var n=t.studentId;e._studentService.getStudent(e._admin.id,n).takeUntil(e.isDestroyed$).subscribe(function(t){e.student=t,e.newRole=e.student.role,e._scenarioService.listScenarios().takeUntil(e.isDestroyed$).subscribe(function(t){e.scenarios=t})},function(t){e.errorMessage=h.readErrorMessage(t)})})},e.prototype.getScenStatus=function(e){var t=this.student.accessGranted[e];return!0===t?"Access granted":!1===t?"Access not granted":"NA"},e.prototype.getStudentCourse=function(){var e=this.student;return e.course?"<a [routlerLink]=\"['/admin/courses/', \""+e.course.courseNum+']">s.course.courseNum</a>':"No course"},e.prototype.accessButtonClass=function(e){var t=this.student.accessGranted[e];return{"btn btn-sm":!0,"btn-outline-secondary":t,"btn-outline-dark":!t}},e.prototype.accessButtonText=function(e){return this.student.accessGranted[e]?"Revoke access":"Grant access"},e.prototype.grantAccess=function(e){var t=this;this._studentService.grantScenAccess(this._admin.id,this.student.userId,e,!0).takeUntil(this.isDestroyed$).subscribe(function(n){void 0!==n&&null!==n&&(t.student.accessGranted[e]=n.accessGranted[e])},function(e){t.errorMessage=e.error.message})},e.prototype.roleDisabled=function(e){return void 0!==this._admin&&(this.student.userId===this._admin.id||("admin"===e&&this._admin.role<2||"instr"===e&&this._admin.role<1))},e.prototype.roleButtonClass=function(e){return{"btn btn-sm":!0,"btn-outline-secondary":e!==this.student.role,"btn-secondary":e===this.student.role}},e.prototype.clickButton=function(e){var t=this;this._studentService.setStudentRole(this._admin.id,this.student.userId,e).takeUntil(this.isDestroyed$).subscribe(function(e){t.student=e},function(e){t.errorMessage=e.error.message})},e.prototype.deleteDisabled=function(){return void 0===this._admin||this.student.userId!==this._admin.id&&"admin"===this.student.role},e.prototype.checkDelete=function(){var e=this,t=this._modalService.open(p.ConfirmDeleteDialogComponent,{size:"sm"});t.componentInstance.message="Are you sure you want to delete?",t.result.then(function(t){"delete"===t&&e._callDelete()},function(e){})},e.prototype._callDelete=function(){var e=this;this._studentService.deleteStudent(this._admin.id,this.student.userId).takeUntil(this.isDestroyed$).subscribe(function(t){e._router.navigate(["/admin/students"])},function(t){e.errorMessage=h.readErrorMessage(t)})},e.prototype.ngOnDestroy=function(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()},e=r([i.Component({selector:"student-indiv",templateUrl:"app/admin/student/student-indiv/student-indiv.template.html"}),s("design:paramtypes",[o.Router,o.ActivatedRoute,c.AuthenticationService,d.StudentService,l.ScenarioService,a.NgbModal])],e)}();t.StudentIndivComponent=v},992:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(20),a=n(10);n(68);var u=n(440),c=n(24),d=n(69),l=function(){function e(e,t,n,r){this._router=e,this._route=t,this._studentService=n,this._authService=r,this.hasFridge=!1,this.viewStrains="all",this.errorMessage="",this.isDestroyed$=new a.Subject}return e.prototype.ngOnInit=function(){var e=this;this.paramObserver=this._route.params.subscribe(function(t){var n=t.studentId,r=t.scenId,s=e._authService.getUser();e._studentService.getFridge(s.id,n,r).takeUntil(e.isDestroyed$).subscribe(function(t){if(e.fridge=t,e.hasFridge=void 0!==t.strains,e.hasFridge){for(var n=JSON.parse(e.fridge.guesses),r=0,s=e.fridge.strains;r<s.length;r++){var i=s[r],o=n[i.strainNum];i.guesses=o||[]}e.fridge.strains.sort(function(e,t){return e.strainNum-t.strainNum})}e.setPhage("all")},function(t){e.errorMessage=d.readErrorMessage(t)})})},e.prototype.getButtonClass=function(e){return{"btn btn-sm":!0,"btn-primary":e===this.viewStrains,"btn-outline-primary":e!==this.viewStrains}},e.prototype.setPhage=function(e){this.viewStrains=e,"all"===this.viewStrains?this.strainList=this.fridge.strains:this.strainList=this.fridge.strains.filter(function(e){return"unknown"===e.phageType||!("user"!==e.phageType||!e.submitted)})},e.prototype.ngOnDestroy=function(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()},e=r([i.Component({selector:"student-fridge",templateUrl:"app/admin/student/student-fridge/student-fridge.template.html"}),s("design:paramtypes",[o.Router,o.ActivatedRoute,u.StudentService,c.AuthenticationService])],e)}();t.StudentFridgeComponent=l},993:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(0),a=n(24),u=n(440),c=function(){function e(e,t){this._studentService=e,this._authService=t}return e.prototype.resolve=function(e,t){var n=this._authService.getUser(),r=e.params.studentId;return r?this._studentService.getStudent(n.id,r):new o.Observable},e=r([i.Injectable(),s("design:paramtypes",[u.StudentService,a.AuthenticationService])],e)}();t.StudentResolver=c}});
