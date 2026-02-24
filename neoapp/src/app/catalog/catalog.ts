import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libraryservice } from '../libraryservice';
import { Book } from '../Book';

@Component({
  standalone: true,
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  bookList:Book[]=[];
  constructor(private libraryService: Libraryservice) {
    
  }
  ngOnInit() {
    this.bookList = this.libraryService.getBooks();
  }

  deleteBook(id: number){
    this.libraryService.deleteBook(id);
    this.bookList = this.libraryService.getBooks();
  }

  editBook(book: Book){
    this.libraryService.setEditingBook(book);
  }

}
