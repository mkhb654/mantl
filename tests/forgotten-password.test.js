import { Selector } from 'testcafe';
fixture `My first fixture`
    .page `http://www.mint.com`;

test('test for mint recover password', async t =>{
  const signInButton = Selector('body > div.shell > div > section.container-cms.component-margin-none > header > div > div.header__1-0-6__header__buttons.btn-inline-container.btn-small-container.show-all-buttons > a.btn.btn-secondary.beacon-this');
  const userIdLink = Selector('#ius-link-account-recovery');
  const userInputEmail = Selector('#ius-username');
  const submitButton = Selector('#ius-collect-username-submit-btn');
  const wesend = Selector('ius-check-email-sub-header');
    await t.click(signInButton);
    await t.click(userIdLink); 
    await t.typeText(userInputEmail, 'mkhb654@gmail.com');
    await t.click(submitButton);


   await t
    .wait(500)
    .expect(submitButton.exists).ok();
      
         
    
});