import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";


export class AsyncCustomValidator {
    static AsyncCheckExistName(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            let member = ["anita", "amy", "bob"];
            let result:Observable<ValidationErrors | null> = of(null);
            let value = control.value;

            if (member.find(m => m.toLocaleLowerCase() == value.toLocaleLowerCase())) {
                result = of({
                    "CheckExistName": {
                        actualValue: value,
                        requiredValue: '此帳號已經有人註冊，請重新命名'
                    }
                })
            }
            return result;
        };
    }
}

