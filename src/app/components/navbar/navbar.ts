import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  showAdminMenu: boolean = false;
  mobileMenuOpen: boolean = false;

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role');
    this.isLoggedIn = !!token;
    this.isAdmin = userRole === 'admin';
  }

  toggleAdminMenu(): void {
    this.showAdminMenu = !this.showAdminMenu;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;

    if (!this.mobileMenuOpen) {
      this.showAdminMenu = false;
    }
  }

  closeMenus(): void {
    this.mobileMenuOpen = false;
    this.showAdminMenu = false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.closeMenus();
    this.router.navigate(['/login']);
  }
}
