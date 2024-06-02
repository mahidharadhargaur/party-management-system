import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  constructor(
    private _fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  public loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: new FormControl('testing'),
      password: new FormControl('Test@Test'),
    });
  }

  submit() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        console.log(res);
        this.authService.token = res.token;
        this.authService.isLoggedIn = true;

        this.router.navigate(['']);
      },
    });
  }
}
