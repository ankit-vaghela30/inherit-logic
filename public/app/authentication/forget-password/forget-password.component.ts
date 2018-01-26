import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from '../authentication.service';
import { readErrorMessage } from '../../shared/read-error';

@Component({
    selector: 'forget-pswd-cmp',
    templateUrl: 'app/authentication/forget-password/forget-password.template.html',
  //styleUrls: ['app/authentication/signin/signin.style.css']
})
export class ForgetPasswordComponent {
    private errorMessage: string = '';
  private successMessage: string = '';
    private email: string;
  private subscription: Subscription;

    constructor(private _authenticationService: AuthenticationService) { }

    sendForget() {
      this.successMessage = '';
      this.errorMessage = '';
      let body = {email: this.email};
        this.subscription = this._authenticationService
          .forgetPassword(body)
          .subscribe((result) => {
          console.log(result);
          // if successful, should get success message
          this.successMessage = result.message;
        },
            (error) => {
          console.log(error);
          this.errorMessage = readErrorMessage(error)
        });
    }

  ngOnDestroy(){
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}