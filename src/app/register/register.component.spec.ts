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

});
