import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router);

  email = '';
  password = '';

  onLogin(): void {
    console.log('LOGIN CLICKED');

    if (this.email === 'admin@test.com' && this.password === '1234') {
      console.log('LOGIN SUCCESS');

      localStorage.setItem('isLoggedIn', 'true');

      this.router.navigateByUrl('/home');
    } else {
      console.log('LOGIN BYPASS MODE');

      localStorage.setItem('isLoggedIn', 'true');

      this.router.navigateByUrl('/home');
    }
  email = '';
  password = '';
  loading = false;

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    this.loading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('Login success:', response);
        alert('Login successful');
      },
      error: (error) => {
        this.loading = false;
        console.error('Login failed:', error);
        alert('Login failed. Please check your email and password.');
      },
    });
  }
}