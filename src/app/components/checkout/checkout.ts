import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class Checkout implements OnInit {
  cartItems: any[]=[];
  totalAmount: number=0;

  orderData={
    name:'',
    email:'',
    paymentMethod:'Pay at Pickup',
    orderType:'Store Pickup',
    orderDate: new Date(),
    status:'Pending',
    pickupReady:false
  };
  constructor(private router: Router){}

  ngOnInit() {
    this.loadCart();
  }
  loadCart(){
    const cart=localStorage.getItem('cart');
    this.cartItems=cart ? JSON.parse(cart):[];
    this.calculateTotal();
    if (this.cartItems.length ===0){
      alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
      this.router.navigate(['/']);
    }
  }
  calculateTotal(){
    this.totalAmount=this.cartItems.reduce((sum, item) => sum +(item.price * item.quantity), 0);

    }
    placeOrder(){
      const orders=JSON.parse(localStorage.getItem('orders')|| '[]');
      const newOrder={
        id: Date.now(),
        ...this.orderData,
        items: this.cartItems,
        totalAmount: this.totalAmount,
        estimatedPickupTime: '15-20 minutes'
      }
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.removeItem('cart');
      alert(`Order placed successfully!\n\nOrder #: ${newOrder.id}\nName: ${newOrder.name}\nTotal to pay:$ ${this.totalAmount}\nPickup at: 123 Main St.\nWe'll email ${newOrder.email} when ready!\n\nPay when you pick up.`);

      this.router.navigate(['/order-confirmation',newOrder.id]);

    }
  }


