import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static CheckExistName(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let memeber=["anita", "amy", "bob"];
            let result = null;
            let value = control.value;
            if ( memeber.includes(value.toLowerCase()) ) {
                console.log(value.toLowerCase());
                result = {
                    "CheckExistName": {
                        actualValue: value,
                        requiredValue: `必須是未曾註冊過的，此 ${value} 已經有其他人註冊了.`
                    }
                };
            }
            return result;
        }
    }


    static EqualValue(ctl1Name: string, ctl2Name: string): ValidatorFn {
        return (fg: AbstractControl): ValidationErrors | null => {
            let ctl1 = <FormGroup>fg.get(ctl1Name);
            let ctl2 = <FormGroup>fg.get(ctl2Name);
            let result = null   ; 
            if (ctl1 == null || ctl2 == null)
                return result;
            let value1 = ctl1?.value;
            let value2 = ctl2?.value;   
            if (value1 !== value2) {
                result = {
                    "EqualValue": {
                        actualValue: `value1:${value1}, value2:${value2}`,
                        requiredValue: `${ctl1Name} 與 ${ctl2Name} 兩者的值必須相同`
                    }
                }    
                ctl2.setErrors(result);
            }    
            return result;
        }
    }

}
