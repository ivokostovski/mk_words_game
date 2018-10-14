import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.loginForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
   }

  ngOnInit() {
  }

  login(form) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.email, form.password);
  }

}
