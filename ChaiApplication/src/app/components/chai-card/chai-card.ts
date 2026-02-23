import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ChaiProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-chai-card',
  standalone: false,
  templateUrl: './chai-card.html',
  styleUrl: './chai-card.css',
})
export class ChaiCard {
  @Input() chai: ChaiProduct | null = null;
  @Output() selectProduct = new EventEmitter<ChaiProduct>();

  addToCart() {
    if (this.chai) {
      this.selectProduct.emit(this.chai);
      alert(`${this.chai.name} added to cart!`);
    }
  }

  getRatingArray(): number[] {
    return this.chai ? Array(Math.round(this.chai.rating)).fill(0) : [];
  }
}
