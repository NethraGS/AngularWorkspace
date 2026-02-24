import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Libraryservice } from '../libraryservice';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  id: number=0;
  title: string='';
  author: string = '';
  isEditing = false;
  private editSub?: Subscription;
  constructor(private libraryService: Libraryservice) {
}
ngOnInit(){
  this.editSub = this.libraryService.editing$.subscribe(book => {
    if (book) {
      this.id = book.id;
      this.title = book.title;
      this.author = book.author;
      this.isEditing = true;
    } else {
      this.resetForm();
    }
  });
}

addBookToList(){
  if (this.isEditing) {
    this.updateBook();
    return;
  }
  const newBook = { id: this.id, title: this.title, author: this.author };
  this.libraryService.addBook(newBook);
  this.id++;
  this.resetForm();
}

updateBook(){
  const updated = { id: this.id, title: this.title, author: this.author };
  this.libraryService.updateBook(updated);
  this.libraryService.clearEditing();
  this.resetForm();
}

cancelEdit(){
  this.libraryService.clearEditing();
}

private resetForm(){
  this.isEditing = false;
  this.id = this.id || (this.libraryService.getBooks().length + 1);
  this.title = '';
  this.author = '';
}

ngOnDestroy(){
  this.editSub?.unsubscribe();
}
}
