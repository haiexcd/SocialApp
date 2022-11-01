import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { confirmPasswordMatch, emailValidator, usernameValidator } from 'src/app/shared/validators/register-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ], [
      usernameValidator(this.service)
    ]),
    email: new FormControl('', [
      Validators.required,
    ], [
      emailValidator(this.service)
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
    ])
  })


  constructor(
    private service: ValidateRegisterService,
  ) { }


  ngOnInit(): void {

    this.form.controls['email'].setAsyncValidators(emailValidator(this.service))

    this.form.controls['username'].setAsyncValidators(usernameValidator(this.service))

    this.form.controls['passwordConfirm'].setValidators(confirmPasswordMatch.confirmPassword(this.form.controls['password'] as FormControl))

  }

  get username() : FormControl {
    return this.form.get('username') as FormControl
  }

  get email() : FormControl {
    return this.form.get('email') as FormControl
  }

  get password() : FormControl {
    return this.form.get('password') as FormControl
  }

  get passwordConfirm() : FormControl {
    return this.form.get('passwordConfirm') as FormControl
  }


}
