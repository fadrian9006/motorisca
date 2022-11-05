import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.getForm();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      window.alert(`Your username is: ${ this.loginForm.value.username } and your password:  ${ this.loginForm.value.password }`);
    }
  }

  private getForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.minLength(5), Validators.required]),
      password: new FormControl('', [ Validators.minLength(10), Validators.required]),
      rememberMe: new FormControl(false)
    });
  }

}
