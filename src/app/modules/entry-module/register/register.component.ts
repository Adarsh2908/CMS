import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm! : FormGroup;

  constructor(private fb : FormBuilder)
  {
    this.registerForm = fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(10)]]
    });
  }

  register()
  {
    console.log(this.registerForm.value)
  }
}
