import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Simple Web Learning';

  constructor() {
  }

}
