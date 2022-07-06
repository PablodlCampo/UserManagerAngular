import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from './login.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  private token!: string;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {

    this.loginService.login(this.form.controls['username'].value, this.form.controls['password'].value).subscribe(
      {
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (error: any) => {
            alert("Usuario o contraseña incorrectos");
        }
      });

  }
}
