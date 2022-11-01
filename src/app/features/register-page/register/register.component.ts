import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  
  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
    ])
  })


  constructor() { }


  ngOnInit(): void {

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
