
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books = [
    { id: 1, name: 'Start with Why', description: 'Sinek explores the concept of the Golden Circle, urging businesses to start with "why" – the purpose behind their existence – to inspire loyalty and innovation from both employees and customers' },
    { id: 2, name: 'The Lean Startup', description: 'This book introduces the concept of lean thinking in startups, emphasizing the importance of iterative development, validated learning, and efficient use of resources to build successful and sustainable businesses.' },
    { id: 3, name: 'Zero to One', description: 'Co-founder of PayPal, Peter Thiel, shares his insights on innovation and entrepreneurship, encouraging startups to focus on creating unique, monopoly-like businesses instead of copying existing models.' },
    { id: 4, name: 'Good to Great', description: 'jim Collins explores why some companies make the leap from good to great while others dont. The book identifies key principles and practices that contribute to long-term business success' },
  ];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();

    this.bookService.getBooksSubject().subscribe((updatedBooks) => {
      this.books = updatedBooks;
    });

    this.bookService.getDeleteSubject().subscribe((deletedBookId: number) => {
      this.books = this.books.filter(book => book.id !== deletedBookId);
    });
  }
}

