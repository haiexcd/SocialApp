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



export function noupper (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    if (!hasUpperCase){
        return {"noupper": true}
    }
    return null;
}

export function nolower (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasUpperCase = /[a-z]+/.test(value);
    if (!hasUpperCase){
        return {"nolower": true}
    }
    return null;
}

export function nospecial (control: AbstractControl) : ValidationErrors | null {
    const value = control.value;
    if (!value) {
        return null;
    }
    const hasLowerCase = /[^A-Za-z0-9]+/.test(value);
    if (!hasLowerCase){
        return {"nospecial": true}
    }
    return null;
}













