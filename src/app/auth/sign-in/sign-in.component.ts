import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";


export interface SignInData {
  username: FormControl<string | any>;
  password: FormControl<string | any>;
}


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    FormsModule,
    ReactiveFormsModule,
    MatCardSubtitle,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatButton
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm: FormGroup<SignInData>;
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.signInForm.invalid) {
      this.error = 'Username and Password not valid!'
      return;
    } else {
      this.authService.login(this.signInForm.value.username, this.signInForm.value.password)
        .subscribe({
          next: res => {
            if (res) {
              setTimeout(() => {
                // get role
                // token
              }, 1000)

            } else {
              this.error = 'Invalid Login'
            }

          },
          error: err => {
            this.error = err;
            this.submitted = false;
            this.loading = false;
          }
        })
    }
  }

}
