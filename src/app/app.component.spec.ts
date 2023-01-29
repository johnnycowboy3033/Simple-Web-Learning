import {ComponentFixture, TestBed} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        RegisterComponent,
      ],
    }).compileComponents();
  });

  beforeEach( ()=> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be true', () => {
    const testVariable = true;
    expect(testVariable).toEqual(testVariable);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Simple Web Learning'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Simple Web Learning');
  });

  it(`should render content 'Simple Web Learning app is running!' ` , () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Simple Web Learning app is running!');
  });


});
