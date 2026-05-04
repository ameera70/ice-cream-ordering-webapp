import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  imports: [CommonModule],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css',
  standalone: true
})
export class OrderConfirmation implements OnInit {
  order: any=null;
  orderId: number=0;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit()  {
    this.loadOrder();
  }
  loadOrder() {
    this.route.params.subscribe(params => {
      this.orderId=+params['id'];
      this.findOrder();
    });
}
findOrder(){
  const orders=JSON.parse(localStorage.getItem('orders')|| '[]');
  this.order=orders.find((o: any) => o.id === this.orderId);
  if(!this.order){
    alert('Order not found!');
    this.router.navigate(['/']);
  }
}
goHome(){
  this.router.navigate(['/']);
}
viewOrders(){
  this.router.navigate(['/']);
}
}