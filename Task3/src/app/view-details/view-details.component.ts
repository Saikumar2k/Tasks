
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  selectedBook: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');

      if (bookId) {

        this.getBookDetailsById(bookId).then((book) => {
          this.selectedBook = book;
        });
      }
    });
  }

  private async getBookDetailsById(bookId: string): Promise<any> {

    return new Promise((resolve) => {
      const bookDetails = this.books.find(book => book.id.toString() === bookId);
      resolve(bookDetails);
    });
  }

  books = [
    { id: 1, name: 'Start with Why', description: 'Sinek explores the concept of the Golden Circle, urging businesses to start with "why" – the purpose behind their existence – to inspire loyalty and innovation from both employees and customers' },
    { id: 2, name: 'The Lean Startup', description: 'This book introduces the concept of lean thinking in startups, emphasizing the importance of iterative development, validated learning, and efficient use of resources to build successful and sustainable businesses.' },
    { id: 3, name: 'Zero to One', description: 'Co-founder of PayPal, Peter Thiel, shares his insights on innovation and entrepreneurship, encouraging startups to focus on creating unique, monopoly-like businesses instead of copying existing models.' },
    { id: 4, name: 'Good to Great', description: 'jim Collins explores why some companies make the leap from good to great while others dont. The book identifies key principles and practices that contribute to long-term business success' },
  ];
}
