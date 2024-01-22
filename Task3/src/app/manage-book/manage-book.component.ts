
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css'],
})
export class ManageBookComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();

    const deleteSubject$: Observable<number> = this.bookService.getDeleteSubject();
    deleteSubject$.subscribe((deletedBookId: number) => {
      this.books = this.books.filter(book => book.id !== deletedBookId);
    });
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
  }
}
