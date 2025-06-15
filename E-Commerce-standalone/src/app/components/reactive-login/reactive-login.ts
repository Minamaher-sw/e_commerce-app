import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserAuth } from '../../services/user-auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-login',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './reactive-login.html',
  styleUrl: './reactive-login.css'
})
export class ReactiveLogin {
  loginForm: FormGroup;
  userLogin =inject(UserAuth)
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userLogin.login(username ,password);
      // Call authentication service here
    }
  }

  get username() {
    return this.loginForm.get('username');
  }
}
