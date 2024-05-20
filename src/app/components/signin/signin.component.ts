import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { SigninService } from './signin.service';
import { LoginRequest } from './signin.model';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  isInvalidCredential = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    keepLoggedIn: new FormControl(false),
  });

  constructor(private signinService: SigninService, private router: Router) {}

  signIn() {
    const loginInfo: LoginRequest = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.signinService.login(loginInfo).subscribe({
      next: (resp: any) => {
        console.log(resp);
        resp?.length && localStorage.setItem('token', resp);
        this.router.navigate([
          ''
        ]);
      },
      error: (err: any) => {
        localStorage.removeItem('token');
        this.isInvalidCredential = true;
      },
    })
  }
}
