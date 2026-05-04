import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { ManageMenu } from './components/manage-menu/manage-menu';
import { ManageOrders } from './components/manage-orders/manage-orders';
import { Menu } from './components/menu/menu';
import { Checkout } from './components/checkout/checkout';
import { About } from './components/about/about';
import { OrderConfirmation } from './order-confirmation/order-confirmation';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'home', component: Home },
  { path: 'menu', component: Menu },  

  { path: 'admin', component: AdminDashboard },
  { path: 'admin/menu', component: ManageMenu },
  { path: 'admin/orders', component: ManageOrders },

  { path: '**', redirectTo: 'login' }
];
  { path: 'checkout', component: Checkout },
  { path: 'about', component: About },
  { path: 'order-confirmation/:id', component: OrderConfirmation },
  { path: '**', redirectTo: 'login' },
];
