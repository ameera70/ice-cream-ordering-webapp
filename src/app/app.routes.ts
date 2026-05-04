import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { ManageMenu } from './components/manage-menu/manage-menu';
import { ManageOrders } from './components/manage-orders/manage-orders';
import { Menu } from './components/menu/menu';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'home', component: Home },
  { path: 'menu', component: Menu },   // ✅ ONLY ONCE

  { path: 'admin', component: AdminDashboard },
  { path: 'admin/menu', component: ManageMenu },
  { path: 'admin/orders', component: ManageOrders },

  { path: '**', redirectTo: 'login' }
];