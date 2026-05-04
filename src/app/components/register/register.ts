import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);

  name = '';
  email = '';
  password = '';
  loading = false;

  onRegister(): void {
    if (!this.name || !this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('Register success:', response);
        alert('Account created successfully');
        this.name = '';
        this.email = '';
        this.password = '';
      },
      error: (error) => {
        this.loading = false;
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      },
    });
  }
}
