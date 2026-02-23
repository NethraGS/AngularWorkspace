import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaiCard } from '../chai-card/chai-card';

interface ChaiProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-chai-list',
  standalone: false,
  templateUrl: './chai-list.html',
  styleUrl: './chai-list.css',
})
export class ChaiList {
  chaiProducts: ChaiProduct[] = [
    {
      id: 1,
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea with milk',
      price: 3.99,
      image: 'assets/masala-chai.svg',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Ginger Chai',
      description: 'Warm and soothing ginger chai',
      price: 4.49,
      image: 'assets/ginger-chai.svg',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Green Chai',
      description: 'Healthy green tea chai blend',
      price: 4.99,
      image: 'assets/green-chai.svg',
      rating: 4.7
    }
  ];

  selectedProduct: ChaiProduct | null = null;

  selectProduct(product: ChaiProduct) {
    this.selectedProduct = product;
  }
}
