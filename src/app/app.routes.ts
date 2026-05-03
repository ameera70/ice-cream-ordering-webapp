import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { ManageMenu } from './components/manage-menu/manage-menu';
import { ManageOrders } from './components/manage-orders/manage-orders';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'admin', component: AdminDashboard },
  { path: 'admin/menu', component: ManageMenu },
  { path: 'admin/orders', component: ManageOrders },
  { path: 'checkout', component: Checkout },
  { path: '**', redirectTo: 'login' },
];
