import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ctrl-row element with class --username', () => {

    const el = fixture.debugElement.query( By.css('.ctrl-row.--username'));
    expect(el).toBeTruthy();

  });

  it('should have a label with class ctrl-label for the username field', () => {

    const el = fixture.debugElement.query( By.css('.--username label.ctrl-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('username');

  });

  it('should display Username on the label for the username field', () => {
    //Arrange & Assert
    const el = fixture.debugElement.query( By.css('.--username .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Username');

  });

  it('should have an input element with class ctrl for the user field', () => {
    //Arrange & Assert
    const el = fixture.debugElement.query( By.css('.--username input.ctrl'));
    expect(el).toBeTruthy();

    expect(el.nativeElement.getAttribute('type')).toEqual('text');
    expect(el.nativeElement.getAttribute('id')).toEqual('username');
    expect(el.nativeElement.getAttribute('name')).toEqual('username');
    expect(el.nativeElement.getAttribute('autocomplete')).toEqual('off');

  });

  it('should bind the username to its FormControl', () => {
    // Arrange
    const el = fixture.debugElement.query( By.css('.--username .ctrl'));
    const ctrl = component.registerForm.get('username');

    // Act
    const dummyValue = '123';
    // @ts-ignore
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    // Act
    expect(el.nativeElement.value).toEqual(dummyValue);
    // @ts-ignore
    expect((el.nativeElement as HTMLInputElement).value).toEqual(dummyValue);
  });

  it('should mark username as invalid when it has no value', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();

  });

  it('should mark username as valid when it has value', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();

  });

  it('should mark username as invalid when its value is longer than 10 characters', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('123456789123456789');
    fixture.detectChanges();

    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();

  });

  it('should mark username as valid when its value is less than 10 characters', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('123456789');
    fixture.detectChanges();

    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();

  });

  it('should have a ctrl-row element with class --team', () => {
    // Arrange & Asset

    const el = fixture.debugElement.query( By.css('.ctrl-row.--team'));
    expect(el).toBeTruthy();

  });

  it('should have a label with class ctrl-label for the team field', () => {
    // Arrange & Asset

    const el = fixture.debugElement.query( By.css('.--team label.ctrl-label'));
    expect(el).toBeTruthy();

    expect(el.nativeElement.getAttribute('for')).toEqual('team');

  });

  it('should display Team on the label for the team field', () => {
    // Arrange & Asset

    const el = fixture.debugElement.query( By.css('.--team .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Team');

  });

  it('should have a select element with class ctrl for the team field', () => {
    // Arrange & Asset

    const el = fixture.debugElement.query( By.css('.--team select.ctrl'));
    expect(el).toBeTruthy();

    expect(el.nativeElement.getAttribute('id')).toEqual('team');
    expect(el.nativeElement.getAttribute('name')).toEqual('team');

  });

  it('should render correct number of team options', () => {
    // Arrange

    const dummyTeamList = [
      {
        id:1,
        name:'Test'
      },
      {
        id:2,
        name:'Dummy'
      }
    ];

    component.teamList = dummyTeamList;
    fixture.detectChanges();

    const optionE1 = fixture.debugElement.queryAll( By.css('.--team .option'));
    expect(optionE1.length).toEqual(dummyTeamList.length + 1);

  });

  it('should display correct text on the dropdown options', () => {
    // Arrange

    const dummyTeamList = [
      {
        id:1,
        name:'Test'
      },
      {
        id:2,
        name:'Dummy'
      }
    ];

    component.teamList = dummyTeamList;
    fixture.detectChanges();

    const optionE1 = fixture.debugElement.queryAll( By.css('.--team .option'));
    optionE1.forEach( (el, index)=>{
      if(index !== 0){
        // @ts-ignore
        expect((el.nativeElement as HTMLOptionElement).innerText).toEqual(dummyTeamList[index-1]['name']);
      }
    })


  });


  it('should bind the team to its FormControl', () => {
    // Arrange
    const el = fixture.debugElement.query( By.css('.--team .ctrl'));
    const ctrl = component.registerForm.get('team');

    // Act
    const dummyValue = component.teamList[0];
    // @ts-ignore
    ctrl.setValue(dummyValue.id);
    fixture.detectChanges();

    // Act
    const selectedTeam = component.teamList[(el.nativeElement as HTMLSelectElement).selectedIndex - 1]
    expect(selectedTeam).toEqual(dummyValue);
  });

  it('should mark team as invalid when it has no value', () => {

    // Arrange
    const ctrl = component.registerForm.get('team');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();

  });

  it('should mark team as valid when it has  value', () => {

    // Arrange
    const ctrl = component.registerForm.get('team');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();

  });

  // #region Gender HTML related tests
  it('should have a ctrl-row element with class --gender', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.ctrl-row.--gender'));
    expect(el).toBeTruthy();
  });

  it('should display Gender on the label for the gender field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--gender .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Gender');
  });
  it('should have a div element with class radio-group and ctrl for the gender field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--gender div.radio-group.ctrl'));
    expect(el).toBeTruthy();
  });
  it('should have two div elements with class radio-option for the gender field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.queryAll(By.css('.--gender .radio-group .radio-option'));
    expect(el.length).toEqual(2);
  });
  it('should have a male radio-option for the gender field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--gender .radio-option.--male'));
    expect(el).toBeTruthy();
  });
  it('should have a female radio-option for the gender field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--gender .radio-option.--female'));
    expect(el).toBeTruthy();
  });

  it('should have an input element with class radio-ctrl for the male radio-option', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.radio-option.--male input.radio-ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('radio');
    expect(el.nativeElement.getAttribute('id')).toEqual('male');
    expect(el.nativeElement.getAttribute('name')).toEqual('gender');
    expect(el.nativeElement.getAttribute('value')).toEqual('M');
  });
  it('should have a label element with class radio-label for the male radio-option', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.radio-option.--male label.radio-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('male');
    expect(el.nativeElement.innerText).toEqual('Male');
  });
  it('should have an input element with class radio-ctrl for the female radio-option', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.radio-option.--female input.radio-ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('radio');
    expect(el.nativeElement.getAttribute('id')).toEqual('female');
    expect(el.nativeElement.getAttribute('name')).toEqual('gender');
    expect(el.nativeElement.getAttribute('value')).toEqual('F');
  });
  it('should have a label element with class radio-label for the female radio-option', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.radio-option.--female label.radio-label'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('female');
    expect(el.nativeElement.innerText).toEqual('Female');
  });
  it('should bind the gender to its FormControl when male is selected', () => {
    // Arrange
    const maleOption = (fixture.debugElement.query(By.css('.--gender .radio-option.--male .radio-ctrl')).nativeElement) as HTMLInputElement;
    const femaleOption = (fixture.debugElement.query(By.css('.--gender .radio-option.--female .radio-ctrl')).nativeElement) as HTMLInputElement;
    const ctrl = component.registerForm.get('gender');

    // Act
    const dummyValue = 'M';
    // @ts-ignore
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    // Act
    expect(maleOption.checked).toBeTruthy();
    expect(femaleOption.checked).toBeFalsy();
  });
  it('should bind the gender to its FormControl when female is selected', () => {
    // Arrange
    const maleOption = (fixture.debugElement.query(By.css('.--gender .radio-option.--male .radio-ctrl')).nativeElement) as HTMLInputElement;
    const femaleOption = (fixture.debugElement.query(By.css('.--gender .radio-option.--female .radio-ctrl')).nativeElement) as HTMLInputElement;
    const ctrl = component.registerForm.get('gender');

    // Act
    const dummyValue = 'F';
    // @ts-ignore
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    // Act
    expect(maleOption.checked).toBeFalsy();
    expect(femaleOption.checked).toBeTruthy();
  });
  // #endregion

  // #region News Letter HTML related tests
  it('should have a ctrl-row element with class --news-letter', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.ctrl-row.--news-letter'));
    expect(el).toBeTruthy();
  });
  it('should have a label with class ctrl-label and --checkbox for the subscription field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--news-letter label.ctrl-label.--checkbox'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('for')).toEqual('subscription');
  });
  it('should display Subscribe to News Letter on the label for the subscription field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--news-letter .ctrl-label'));
    expect(el.nativeElement.innerText).toEqual('Subscribe to News Letter');
  });
  it('should have an input element with class ctrl and --checkbox for the subscription field', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.--news-letter input.ctrl'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('checkbox');
    expect(el.nativeElement.getAttribute('id')).toEqual('subscription');
    expect(el.nativeElement.getAttribute('name')).toEqual('subscription');
  });
  it('should bind the subscription to its FormControl when subscription is checked', () => {
    // Arrange
    const el = fixture.debugElement.query(By.css('.--news-letter .ctrl'));
    const ctrl = component.registerForm.get('subscription');

    // Act
    const dummyValue = true;
    // @ts-ignore
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    // Act
    expect((el.nativeElement as HTMLInputElement).checked).toEqual(dummyValue);
  });
  it('should bind the subscription to its FormControl when subscription is not checked', () => {
    // Arrange
    const el = fixture.debugElement.query(By.css('.--news-letter .ctrl'));
    const ctrl = component.registerForm.get('subscription');

    // Act
    const dummyValue = false;
    // @ts-ignore
    ctrl.setValue(dummyValue);
    fixture.detectChanges();

    // Act
    expect((el.nativeElement as HTMLInputElement).checked).toEqual(dummyValue);
  });
  // #endregion

  // #region Submit button HTML related tests
  it('should have a button with class submit-btn inside the signup-form', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.signup-form button.submit-btn'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual('submit');
  });
  it('should display Submit on the submit button', () => {
    // Arrange & Assert
    const el = fixture.debugElement.query(By.css('.signup-form .submit-btn'));
    expect(el.nativeElement.innerText).toEqual('Submit');
  });
  it('should submit the form when the submit button is clicked', () => {
    // Arrange
    const btnEl = fixture.debugElement.query(By.css('.submit-btn'));
    const fnc = spyOn(component, 'submitForm');

    // Act
    (btnEl.nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();

    // Assert
    expect(fnc).toHaveBeenCalled();
  });
  // #endregion

  // #region Username FormControl related tests
  it('should mark username as invalid when it has no value', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();
  });
  it('should mark username as valid when it has value', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();
  });
  it('should mark username as invalid when its value is longer than 10 characters', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('12345678912345789');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();
  });
  it('should mark username as valid when its value is less than 10 character', () => {
    // Arrange
    const ctrl = component.registerForm.get('username');

    // Act
    // @ts-ignore
    ctrl.setValue('123456789');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();
  });
  // #endregion

  // #region Password FormControl related tests
  it('should mark password as invalid when it has no value', () => {
    // Arrange
    const ctrl = component.registerForm.get('password');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();
  });
  it('should mark password as valid when it has value', () => {
    // Arrange
    const ctrl = component.registerForm.get('password');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();
  });
  // #endregion

  // #region gender FormControl related tests
  it('should set the default value of gender to male', () => {
    // Arrange & Assert
    const ctrl = component.registerForm.get('gender');
    // @ts-ignore
    expect(ctrl.value).toEqual('M');
  });
  // #endregion

  // #region email FormControl related tests
  it('should mark email as invalid when it has no value', () => {
    // Arrange
    const ctrl = component.registerForm.get('email');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();
  });
  it('should mark email as valid when it has value', () => {
    // Arrange
    const ctrl = component.registerForm.get('email');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();
  });
  // #endregion

  // #region team FormControl related tests
  it('should mark team as invalid when it has no value', () => {
    // Arrange
    const ctrl = component.registerForm.get('team');

    // Act
    // @ts-ignore
    ctrl.setValue(null);
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.invalid).toBeTruthy();
  });
  it('should mark team as valid when it has value', () => {
    // Arrange
    const ctrl = component.registerForm.get('team');

    // Act
    // @ts-ignore
    ctrl.setValue('test');
    fixture.detectChanges();

    // Assert
    // @ts-ignore
    expect(ctrl.valid).toBeTruthy();
  });
  // #endregion

  // #region subscription FormControl related tests
  it('should set the default value of subscription to true', () => {
    // Arrange & Assert
    const ctrl = component.registerForm.get('subscription');
    // @ts-ignore
    expect(ctrl.value).toBeTruthy();
  });
  // #endregion

  // #region isFormValid realted tests
  it('should return true when isFormValid is called and the registerForm is indeed valid', () => {
    // Arrange
    const dummyData = {
      username: 'test',
      password: 'test',
      gender: 'M',
      email: 'test@gmail.com',
      team: component.teamList[0].id,
      subscription: false
    };

    // Act
    // @ts-ignore
    component.registerForm.patchValue(dummyData);
    fixture.detectChanges();

    // Assert
    expect(component.isFormValid()).toBeTruthy();
  });
  it('should return false when isFormValid is called and the registerForm is not valid', () => {
    // Arrange
    const dummyData = {
      username: null,
      password: 'test',
      gender: 'M',
      email: 'test@gmail.com',
      team: component.teamList[0].id,
      subscription: false
    };

    // Act
    // @ts-ignore
    component.registerForm.patchValue(dummyData);
    fixture.detectChanges();

    // Assert
    expect(component.isFormValid()).toBeFalsy();
  });
  // #endregion

  // #region submitForm related tests
  it('should display alert message when submitForm is called but isFormValid returns false', () => {
    // Arrange
    spyOn(component, 'isFormValid').and.returnValue(false);
    const fnc = spyOn(window, 'alert');

    // Act
    component.submitForm();

    // Assert
    expect(fnc).toHaveBeenCalledWith('Please fill in all fields before submitting the form!');
  });
  it('should not display alert message when submitForm is called but isFormValid returns true', () => {
    // Arrange
    const dummyData = {
      username: null,
      password: 'test',
      gender: 'M',
      email: 'test@gmail.com',
      team: component.teamList[0].id,
      subscription: false
    };
    // @ts-ignore
    component.registerForm.patchValue(dummyData);
    fixture.detectChanges();
    spyOn(component, 'isFormValid').and.returnValue(true);
    spyOn(window, 'confirm');
    const fnc = spyOn(window, 'alert');

    // Act
    component.submitForm();

    // Assert
    expect(fnc).not.toHaveBeenCalled();
  });
  it('should not display registration information when submitForm is called but isFormValid returns false', () => {
    // Arrange
    spyOn(component, 'isFormValid').and.returnValue(false);
    const fnc = spyOn(window, 'confirm');

    // Act
    component.submitForm();

    // Assert
    expect(fnc).not.toHaveBeenCalled();
  });


});
