
import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  newBook = {
    name: '',
    description: '',
  };

  constructor(private bookService: BookService) {}

  addBook() {
    this.bookService.addBook(this.newBook);
    this.resetForm();
  }

  resetForm() {
    this.newBook = {
      name: '',
      description: '',
    };
  }
}
