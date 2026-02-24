import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  Books: any[] = [
    {
      id: 1,
      name: 'Book 1',
    },
    {
      id: 2,
      name: 'Book 2',
    },
    {
      id: 3,
      name: 'Book 3',
    },
  ];
  getBooks() {
    return this.Books;
  }
  addBook(book: any) {
    this.Books.push(book);
  }
  greeting(name: string) {
    return `Hello, ${name}! Welcome to our book store.`;
  }
  
}
