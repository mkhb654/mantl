import {Selector, t} from 'testcafe';

class Page{
    constructor(){
        this.emailField  = Selector('#field1');
        this.addressForm = Selector('#field2');
        this.messageForm = Selector('#comp-ioiffjcrfieldMessage');
     
    }

    async inputForms(emailField, addressForm, messageForm){
        await t
             .typeText(this.emailField, emailField)
             .typeText(this.addressForm, addressForm)
             .typeText(this.messageForm, messageForm )
       
        
              
             

    }
}

export default new Page();