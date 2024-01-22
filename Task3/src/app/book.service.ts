

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private   books = [
    { id: 1, name: 'Start with Why', description: 'Sinek explores the concept of the Golden Circle, urging businesses to start with "why" – the purpose behind their existence – to inspire loyalty and innovation from both employees and customers' },
    { id: 2, name: 'The Lean Startup', description: 'This book introduces the concept of lean thinking in startups, emphasizing the importance of iterative development, validated learning, and efficient use of resources to build successful and sustainable businesses.' },
    { id: 3, name: 'Zero to One', description: 'Co-founder of PayPal, Peter Thiel, shares his insights on innovation and entrepreneurship, encouraging startups to focus on creating unique, monopoly-like businesses instead of copying existing models.' },
    { id: 4, name: 'Good to Great', description: 'jim Collins explores why some companies make the leap from good to great while others dont. The book identifies key principles and practices that contribute to long-term business success' },
  ];

  private booksSubject = new Subject<any[]>();
  private deleteSubject = new Subject<number>();

  getBooks(): any[] {
    return this.books;
  }

  getBooksSubject(): Observable<any[]> {
    return this.booksSubject.asObservable();
  }

  getDeleteSubject(): Observable<number> {
    return this.deleteSubject.asObservable();
  }

  addBook(book: any) {
    this.books.push({ id: this.books.length + 1, ...book });
    this.booksSubject.next([...this.books]);
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter(book => book.id !== bookId);
    this.booksSubject.next([...this.books]);
    this.deleteSubject.next(bookId);
  }
}
