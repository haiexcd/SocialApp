import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import { map, Observable } from "rxjs"
import { ValidateRegisterService } from "../service/validate-register.service"




export function emailValidator(service: ValidateRegisterService) {
    return (control: AbstractControl) : Observable<ValidationErrors | null> => {
        let emailStr = control.value
        return service.checkEmailValid(emailStr).pipe(
            map(res => {
                if (res) {
                    return { "isValid" : true}
                } 
                else {
                    return null
                }
            })
        )
    }
}

export function usernameValidator(service: ValidateRegisterService) {
    return (control: AbstractControl) : Observable<ValidationErrors | null> => {
        let emailStr = control.value
        return service.checkUsernameValid(emailStr).pipe(
            map(res => {
                if (res) {
                    return { "isValid" : true}
                } 
                else {
                    return null
                }
            })
        )
    }
}

export class confirmPasswordMatch {
    static confirmPassword(password: FormControl) : ValidatorFn {
        function confirm(passwordConfirm: AbstractControl) : ValidationErrors | null {
            if (password.value === passwordConfirm.value) {
                return null
            } else {
                return { "isValid" : true}
            }
        }
        return confirm
    }
}














