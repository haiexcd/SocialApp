import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { UpdateUser, UserProfile } from 'src/app/shared/models/userProfile';
import { userToken } from 'src/app/shared/models/userToken';
import { PostLoginService } from 'src/app/shared/service/post-login.service';
import { UpdateUserService } from 'src/app/shared/service/update-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.sass']
})
export class EditProfileComponent implements OnInit {
  userProfile: UserProfile | null | undefined
  token: userToken | null | undefined

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
  })

  constructor(
    private userToken: PostLoginService,
    private updateUserService: UpdateUserService,
    ) { }

  ngOnInit(): void {
    this.token = this.userToken.getToken()
    this.updateUserService.getUser(this.token?.userName).subscribe(res => {
      this.userProfile = res
    })
  }

  get name() : FormControl {
    return this.form.get('name') as FormControl
  }

  get userName() : FormControl {
    return this.form.get('userName') as FormControl
  }

  get userEmail() : FormControl {
    return this.form.get('userEmail') as FormControl
  }

  get password() : FormControl {
    return this.form.get('password') as FormControl
  }

  get age() : FormControl {
    return this.form.get('age') as FormControl
  }

  get gender() : FormControl {
    return this.form.get('gender') as FormControl
  }

  get phone() : FormControl {
    return this.form.get('phone') as FormControl
  }


  onSave() {
    const profile : UpdateUser = {
      name: this.form.controls['name'].value,
      userName: this.form.controls['userName'].value,
      userEmail: this.form.controls['userEmail'].value,
      password: this.form.controls['password'].value,
      age: this.form.controls['age'].value,
      gender: this.form.controls['gender'].value,
      phone: this.form.controls['phone'].value,
    }
    this.updateUserService.updateUser(this.token?._id, profile).subscribe(res => {
      console.log("save result", res)
    })
    // this.form.reset()
  }

}



// onPostComment() {
//   const userToken = this.tokenService.getToken()
//   const userName = userToken?.userName
//   const comment : Comment = {
//     publisherName: userName,
//     content: {text: this.contentText.value}
//   }
//   this.service.postComment(this.data._id, comment).subscribe(res => {
//     this.data.comment?.push(res)
//   })
//   this.contentText.reset()
// }



