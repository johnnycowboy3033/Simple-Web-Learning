import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


interface Team{
  id:number,
  name:string
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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

  isFormValid(): boolean{
    return this.registerForm.valid;
  }

  submitForm(): void{

    if(!this.isFormValid()){
      window.alert('Please fill in all fields before submitting the form!');
      return;
    }

    const body = this.registerForm.getRawValue();

    let msg: string;

    // @ts-ignore
    let name = this.teamList.find(team => team.id === body.team).name;
    msg = `
      Your Registration Information:

      Username: ${body.username}
      Password: **********
      E-mail: ${body.email}
      Gender: ${body.gender === 'M' ? 'Male' : 'Female'}

      Team: ${name}

      Subscription: ${body.subscription ? 'YES' : 'NO'}
      `;

    window.confirm(msg);



  }

}
