import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  formlogin!: FormGroup;
  errorMessage = undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: Auth,
  ) {}
  ngOnInit(): void {
    this.formlogin = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  handlelogin() {
    let username = this.formlogin.value.username;
    let password = this.formlogin.value.password;
    this.authservice.login(username, password)
      .then(() => { this.router.navigate(['/admin']);
      })
      .catch((error) => (this.errorMessage = error));
  }
}
