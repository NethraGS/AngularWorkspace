import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class Libraryservice {
  private bookList: Book[] = [
    { id: 1, title: 'Powerless', author: 'Matthew Cody' },
    { id: 2, title: 'Verity', author: 'Colleen Hoover' },
    { id: 3, title: 'The Silent Patient', author: 'Alex Michaelides' },
  ];

  // Observable used to notify components when a book is selected for editing
  public editing$ = new BehaviorSubject<Book | null>(null);

  getBooks() {
    return this.bookList;
  }

  getBookById(id: number) {
    return this.bookList.find(b => b.id === id) ?? null;
  }

  addBook(book: Book) {
    this.bookList.push(book);
  }

  updateBook(book: Book) {
    const idx = this.bookList.findIndex(b => b.id === book.id);
    if (idx > -1) {
      this.bookList[idx] = book;
    }
  }

  deleteBook(id: number) {
    this.bookList = this.bookList.filter(b => b.id !== id);
  }

  setEditingBook(book: Book | null) {
    this.editing$.next(book);
  }

  clearEditing() {
    this.editing$.next(null);
  }

}
