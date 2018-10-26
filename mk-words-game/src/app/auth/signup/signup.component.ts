import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  signupForm: FormGroup;
  private authStatusSub: Subscription;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.signupForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
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

  signup(form) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.name, form.email, form.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
