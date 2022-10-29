import { AbstractControl, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ValidateLoginService } from "../service/validate-login.service";



export function checkValidate(service: ValidateLoginService) {

    return (control: AbstractControl) : Observable<ValidationErrors | null> => {
        let usernameStr = control.value
        return service.checkUsernameValid(usernameStr).pipe(
            map(res => {
                if (!res) {
                    return { "isValid" : true}
                }
                else {
                    return null
                }
            })
        )
    }
}