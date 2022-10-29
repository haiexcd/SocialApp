import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login';
import { UserProfile } from 'src/app/shared/models/userProfile';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { ValidateLoginService } from 'src/app/shared/service/validate-login.service';
import { checkValidate } from 'src/app/shared/validators/checkUsername';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    userEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ], [
      checkValidate(this.service)
    ]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.required,
    ])
  })

  constructor(
    private service: ValidateLoginService,
    private postService: PostLoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form.controls["userEmail"].setAsyncValidators(checkValidate(this.service))
  }

  get password(): FormControl {
    return this.form.get("password") as FormControl
  }

  get userEmail(): FormControl {
    return this.form.get("userEmail") as FormControl
  }

  get formgroup(): FormGroup {
    return this.form
  }

  onNavigateTo(dest: string) {
    this.router.navigateByUrl(dest)
  }

  onLoginClick() {
    const userInfo: Login = {
      userEmail: this.form.value.userEmail,
      password: this.form.value.password
    }
    let profile : UserProfile
    this.postService.postLogin(userInfo).subscribe(res => {
      if (res) {
      profile = res
      console.log(profile)
      } 
    })
  }

}
