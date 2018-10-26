import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  loginForm: FormGroup;
  private authStatusSub: Subscription;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.loginForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
   }

   ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  login(form) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.loginUser(form.email, form.password);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
