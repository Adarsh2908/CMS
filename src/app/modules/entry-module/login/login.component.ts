import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(10),Validators.required]]
    });
  }

  login()
  {
    console.log(this.loginForm.value)
  }

}
