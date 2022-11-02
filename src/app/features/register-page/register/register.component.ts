import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/shared/models/userProfile';
import { ValidateRegisterService } from 'src/app/shared/service/validate-register.service';
import { confirmPasswordMatch, emailValidator, nolower, nospecial, noupper, usernameValidator } from 'src/app/shared/validators/register-validators';

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
      noupper,
      nolower,
      nospecial,
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
    ])
  })


  constructor(
    private service: ValidateRegisterService,
    private router: Router,
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

  get formgroup() : FormGroup {
    return this.form
  }


  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)

  }

  onSubmit() {
    const profile : UserProfile = {
      name: this.username?.value!,
      userName: this.username?.value!,
      userEmail: this.email?.value!,
      password: this.password?.value!,

      userRole: "user",
      age: 25,
      gender: "hardCodedGender",
      phone: 911,
      token: "hardCodedToken",
    }
    this.service.registerUser(profile).subscribe(res => {
      console.log(res)
    })
    this.onNavigateTo('')
  }


}
