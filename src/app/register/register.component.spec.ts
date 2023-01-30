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


});
