import { FormControl } from "@angular/forms";

export interface SignInModel {
  username: FormControl<string | any>,
  password: FormControl<string | any>,
}
