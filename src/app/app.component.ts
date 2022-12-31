import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

interface Team{
  id:number,
  name:string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'star';

  constructor( private fb: FormBuilder) {
  }

  teamList :Team[] = [
    {
      id:1,
      name: 'Red Team',
    },
    {
      id:2,
      name: 'Blue Team',
    }

  ];

  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.maxLength(10)]],
    password: [null, [Validators.required] ],
    email: [null, [Validators.required] ],
    gender:['M'],
    team: [null, [Validators.required] ],
    subscription:[true]
  });

  submitForm(){

  }

}
