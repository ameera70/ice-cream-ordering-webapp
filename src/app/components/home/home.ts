import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, IceCreamItem } from '../../services/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private router = inject(Router);
  private menuService = inject(MenuService);

  menuItems: IceCreamItem[] = [];

  ngOnInit() {
    this.loadMenuPreview();
  }
async loadMenuPreview() {
  const items = await this.menuService.getMenuItems();
  this.menuItems = items.slice(0, 6);
}

  goToMenu() {
    this.router.navigate(['/menu']);
  }
}