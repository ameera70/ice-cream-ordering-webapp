import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);

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
