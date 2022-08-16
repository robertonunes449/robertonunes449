import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

    private loginOkNotification(u: User) {
      this.snackBar.open(
        'Login feito com sucesso. Bem vindo!!!' + ' ' + u.firstname + '!', 'OK',
        {duration: 2000});
    }

    private loginErrorNotification(err) {
      this.snackBar.open(err, 'OK', {duration: 2000});
    }

  ngOnInit() {
    
  }

  onSubmit() {
    this.loading = true;
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authService.login(email, password)
      .subscribe(
        (u) => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginErrorNotification(err);
          this.loading = false;
        }
      )
  }

  loginGoogle() {
    this.loading = true;
    this.authService.loginGoogle()
      .subscribe(
        (u) => {
          this.loginOkNotification(u);
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          this.loginErrorNotification(err);
          this.loading = false;
        }
      );
  }
}
