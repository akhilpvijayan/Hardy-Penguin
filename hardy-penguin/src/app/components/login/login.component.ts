import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) {}

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/home']); // Navigate to your dashboard or home page
      })
      .catch((error: any) => {
        console.error('Login failed', error);
      });
  }
}
