import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { CourseService } from '../course.service';
import { ScenarioService } from '../../../scenario/scenario.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { StudentService } from '../../student/student.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { User } from '../../../interfaces/user.interface';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'course-scen-smp',
  templateUrl: 'app/admin/course/course-scenario/course-scenario.template.html',
  styleUrls: ['app/admin/course/course-scenario/course-scenario.style.css']
})

export class CourseScenarioComponent{

  private students: Student[] = [];
  private courseNum: string;
  private scenario: Scenario;
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;
  private admin: User;

  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _authService: AuthenticationService,
               private _courseService: CourseService,
               private _studentService: StudentService,
              private _scenarioService: ScenarioService
              ){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit() {
    this.admin = this._authService.getUser();
    this.paramObserver = this._route.params
      .subscribe(params => {
            let course = params['courseNum'];
          let scenCode = params['scenId'];
      this.courseNum = course.toUpperCase();
      this._scenarioService.getScenario(scenCode)
        .takeUntil(this.isDestroyed$)
        .subscribe((res)=>{
          // success
          this.scenario = res;
        this._courseService.getScenarioStatus(this.admin.id, course, scenCode)
          .takeUntil(this.isDestroyed$)
          .subscribe((stats)=>{

            this.students = stats;
        }, (err2)=>{
          this.errorMessage = readErrorMessage(err2);
        });

      }, (err)=>{
        this.errorMessage = readErrorMessage(err);
      });
        });
  }

  formatAccess(isGranted: boolean): string{
    return (isGranted ? 'Access granted' : 'Access not granted');
  }

  accessButtonClass( isGranted: boolean): Object{
    return {
      'btn btn-sm': true,
      'btn-outline-secondary': isGranted,
      'btn-outline-dark': !isGranted
    }
  }

  accessButtonText(isGranted: boolean): string{
    return (isGranted ? 'Revoke access' : 'Grant access');
  }

  toggleAccess(studentIndex: number){
    let curState = this.students[studentIndex].status;
    let scenId = this.scenario.scenCode;
    let studentId = this.students[studentIndex].userId;
    this._studentService.grantScenAccess(this.admin.id, studentId, scenId, !curState)
      .takeUntil(this.isDestroyed$)
      .subscribe((res)=>{
        if(res !== undefined && res !== null){
          this.students[studentIndex].status = res.accessGranted[scenId];
        }
    }, (err)=>{
      this.errorMessage = err.error.message;
    })
  }

  goToFridge(studentId: number){
    this._router.navigate(['/admin/students/', studentId, this.scenario.scenCode]);
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
