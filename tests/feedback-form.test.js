
import page from '../page-objects/page-model';
import {Selector, t}from 'testcafe';

fixture `vinere.health`
.page `http://www.vincere.health`;


test('feedback formInput', async t =>{
  
  await t
    .maximizeWindow()
    .typeText(page.emailField, 'hello@gmail.com')
    .wait(500)
    .typeText(page.addressForm, '107 99 ')
    .wait(500)
    .typeText(page.messageForm, 'thank you')
   
  

});

