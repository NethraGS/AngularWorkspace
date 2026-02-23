import { Component } from '@angular/core';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  orderItems: OrderItem[] = [
    { id: 1, name: 'Masala Chai', quantity: 2, price: 3.99 },
    { id: 2, name: 'Ginger Chai', quantity: 1, price: 4.49 }
  ];

  customerName: string = '';
  customerEmail: string = '';
  deliveryAddress: string = '';
  phoneNumber: string = '';

  getTotalPrice(): number {
    return this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  placeOrder() {
    if (!this.customerName || !this.customerEmail || !this.deliveryAddress) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Order placed successfully for ${this.customerName}!\nTotal: $${this.getTotalPrice().toFixed(2)}`);
  }

  removeItem(id: number) {
    this.orderItems = this.orderItems.filter(item => item.id !== id);
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.orderItems.find(i => i.id === id);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
  }
}
