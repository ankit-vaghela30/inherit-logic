webpackJsonp([0],{1004:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),i=s(20),o=s(992),a=s(993),c=s(994),u=s(204),d=s(995);t.StudentRoutes=[{path:"",children:[{path:":studentId",resolve:{student:d.StudentResolver},data:{breadcrumbs:"{{ student.firstName }} {{ student.lastName }}"},children:[{path:":scenId",component:c.StudentFridgeComponent,resolve:{scenario:u.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"",component:a.StudentIndivComponent}]},{path:"",component:o.StudentListComponent}]}];let l=class{};l=r([n.NgModule({imports:[i.RouterModule.forChild(t.StudentRoutes)],exports:[i.RouterModule]})],l),t.StudentRouteModule=l},1005:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StudentRolesArray=[{key:"student",label:"Student",value:0},{key:"instr",label:"Instructor",value:1},{key:"admin",label:"Administrator",value:2}]},1006:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1);let o=class{constructor(){}formatPhageType(){if(this.phage){this.phage.phageType;return"user"===this.phage.phageType&&this.phage.submitted?"SUBMISSION":this.phage.phageType.toUpperCase()}return""}};r([i.Input(),n("design:type",Object)],o.prototype,"phage",void 0),o=r([i.Component({selector:"student-phage",templateUrl:"app/admin/student/student-fridge/student-phage.template.html"}),n("design:paramtypes",[])],o),t.StudentPhageComponent=o},1007:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),i=s(983);let o=class{transform(e){let t=i.ScenarioGlobals.deletionGuessLength,s="",r=-1;for(let n in e){let i=+n;if(r<0&&e[i])r=t*i;else if(r>0&&!1===e[i]){s+=""===s?"":", ",s+=r+" - "+t*i,r=-1}}return-1!=r&&(s+=""===s?"":", ",s+=r+" - "+i.ScenarioGlobals.geneLength),""===s?"None":s}};o=r([n.Pipe({name:"phageGuesses"})],o),t.PhageGuessesPipe=o},1008:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let n=class{transform(e){let t="";for(let s of e){t+=""===t?"":", ",t+=(s>0?"+1":"-1")+" at "+Math.abs(s)}return t}};n=r([s(1).Pipe({name:"phageMutations"})],n),t.PhageMutationsPipe=n},1009:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let n=class{transform(e){let t="",s=e.length%2==0?e.length:e.length-1;for(let r=0;r<s;r+=2)t+=r>1?", ":"",t+=e[r]+" - "+e[r+1];return t}};n=r([s(1).Pipe({name:"phageDeletions"})],n),t.PhageDeletionsPipe=n},981:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),i=s(63),o=s(1004),a=s(992),c=s(993),u=s(994),d=s(1006),l=s(442),h=s(995),f=s(1007),p=s(1008),g=s(1009);let m=class{};m=r([n.NgModule({imports:[i.SharedModule,o.StudentRouteModule],declarations:[a.StudentListComponent,c.StudentIndivComponent,u.StudentFridgeComponent,d.StudentPhageComponent,f.PhageGuessesPipe,p.PhageMutationsPipe,g.PhageDeletionsPipe],entryComponents:[l.ConfirmDeleteDialogComponent],providers:[h.StudentResolver]})],m),t.StudentModule=m},983:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScenarioGlobals={numPhage:1e6,plateCapacity:1500,plexerCapacity:200,nFridgeShelf:32,nFridgeSpots:16,defaultLabDilution:10,defaultPlexerDilution:5,geneLength:350,deletionGuessLength:10}},984:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var s=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===s?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):s}},992:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),o=s(10),a=s(441),c=s(24),u=s(69),d=s(984);let l=class{constructor(e,t){this._studentService=e,this._authService=t,this.errorMessage="",this.isDestroyed$=new o.Subject}ngOnInit(){let e=this._authService.getUser();this._studentService.listStudents(e.id).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e.sort(d.sortStudents)},e=>{this.errorMessage=u.readErrorMessage(e)})}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};l=r([i.Component({selector:"student-list",templateUrl:"app/admin/student/student-list/student-list.template.html"}),n("design:paramtypes",[a.StudentService,c.AuthenticationService])],l),t.StudentListComponent=l},993:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),o=s(20),a=s(127),c=s(10);s(68);const u=s(24),d=s(441),l=s(126),h=s(1005),f=s(442),p=s(69);let g=class{constructor(e,t,s,r,n,i){this._router=e,this._route=t,this._authService=s,this._studentService=r,this._scenarioService=n,this._modalService=i,this.roles=h.StudentRolesArray,this.errorMessage="",this.isDestroyed$=new c.Subject}ngOnInit(){this._admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.studentId;this._studentService.getStudent(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.student=e,this.newRole=this.student.role,this._scenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarios=e})},e=>{this.errorMessage=p.readErrorMessage(e)})})}getScenStatus(e){let t=this.student.accessGranted[e];return!0===t?"Access granted":!1===t?"Access not granted":"NA"}getStudentCourse(){let e=this.student;return e.course?"<a [routlerLink]=\"['/admin/courses/', \""+e.course.courseNum+']">s.course.courseNum</a>':"No course"}grantAccess(e){this._studentService.grantScenAccess(this._admin.id,this.student.userId,e,!0).takeUntil(this.isDestroyed$).subscribe(e=>{void 0!==e&&null!==e&&(this.student=e)},e=>{this.errorMessage=p.readErrorMessage(e)})}roleDisabled(e){return void 0!==this._admin&&(this.student.userId===this._admin.id||("admin"===e&&this._admin.role<2||"instr"===e&&this._admin.role<1))}roleButtonClass(e){return{"btn btn-sm":!0,"btn-outline-secondary":e!==this.student.role,"btn-secondary":e===this.student.role}}clickButton(e){this._studentService.setStudentRole(this._admin.id,this.student.userId,e).takeUntil(this.isDestroyed$).subscribe(e=>{this.student=e},e=>{this.errorMessage=p.readErrorMessage(e)})}deleteDisabled(){return void 0===this._admin||this.student.userId!==this._admin.id&&"admin"===this.student.role}checkDelete(){const e=this._modalService.open(f.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete?",e.result.then(e=>{"delete"===e&&this._callDelete()},e=>{})}_callDelete(){this._studentService.deleteStudent(this._admin.id,this.student.userId).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/students"])},e=>{this.errorMessage=p.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};g=r([i.Component({selector:"student-indiv",templateUrl:"app/admin/student/student-indiv/student-indiv.template.html"}),n("design:paramtypes",[o.Router,o.ActivatedRoute,u.AuthenticationService,d.StudentService,l.ScenarioService,a.NgbModal])],g),t.StudentIndivComponent=g},994:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),o=s(20),a=s(10);s(68);const c=s(441),u=s(24),d=s(69);let l=class{constructor(e,t,s,r){this._router=e,this._route=t,this._studentService=s,this._authService=r,this.hasFridge=!1,this.viewStrains="all",this.errorMessage="",this.isDestroyed$=new a.Subject}ngOnInit(){this.paramObserver=this._route.params.subscribe(e=>{let t=e.studentId,s=e.scenId,r=this._authService.getUser();this._studentService.getFridge(r.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{if(this.fridge=e,this.hasFridge=void 0!==e.strains,this.hasFridge){let e=JSON.parse(this.fridge.guesses);for(let t of this.fridge.strains){let s=e[t.strainNum];t.guesses=s||[]}this.fridge.strains.sort((e,t)=>e.strainNum-t.strainNum)}this.setPhage("all")},e=>{this.errorMessage=d.readErrorMessage(e)})})}getButtonClass(e){return{"btn btn-sm":!0,"btn-primary":e===this.viewStrains,"btn-outline-primary":e!==this.viewStrains}}setPhage(e){this.viewStrains=e,"all"===this.viewStrains?this.strainList=this.fridge.strains:this.strainList=this.fridge.strains.filter(e=>"unknown"===e.phageType||!("user"!==e.phageType||!e.submitted))}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};l=r([i.Component({selector:"student-fridge",templateUrl:"app/admin/student/student-fridge/student-fridge.template.html"}),n("design:paramtypes",[o.Router,o.ActivatedRoute,c.StudentService,u.AuthenticationService])],l),t.StudentFridgeComponent=l},995:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var n,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,s,o):n(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),o=s(0),a=s(24),c=s(441);let u=class{constructor(e,t){this._studentService=e,this._authService=t}resolve(e,t){let s=this._authService.getUser();const r=e.params.studentId;return r?this._studentService.getStudent(s.id,r):new o.Observable}};u=r([i.Injectable(),n("design:paramtypes",[c.StudentService,a.AuthenticationService])],u),t.StudentResolver=u}});
