import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, IceCreamItem } from '../../services/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html'
})
export class Menu implements OnInit {

  private menuService = inject(MenuService);
  private cdr = inject(ChangeDetectorRef);

  menuItems: IceCreamItem[] = [];

  async ngOnInit() {
    const items = await this.menuService.getMenuItems();

    console.log(" FIREBASE DATA:", items);

    this.menuItems = items;

    
    this.cdr.detectChanges();
  }

  addToCart(item: IceCreamItem) {
    console.log('Added to cart:', item);
  }
}