import { Component, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton, MatIconButton } from "@angular/material/button";
import { SignInModel } from "./sign-in.model";
import { MatIcon } from "@angular/material/icon";

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
    MatButton,
    MatSuffix,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  signInForm: FormGroup<SignInModel>;
  submitted: boolean = false;
  loading: boolean = false;
  error: string = '';
  hide: boolean = true;
  passwordVisible: WritableSignal<boolean> = signal<boolean>(false);

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

  isControlInvalid(control: string, error: string) {
    return this.signInForm.get(control)?.hasError(error);
  }

  switchPass() {
    this.passwordVisible.set(!this.passwordVisible());
  }
}
