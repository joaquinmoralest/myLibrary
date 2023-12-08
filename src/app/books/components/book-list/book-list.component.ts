import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  allBooks: any = [];

  constructor() {}

  async ngOnInit() {
    await this.getBooks();
  }

  async getBooks() {
    const res = await fetch('http://localhost:1234/books');
    this.allBooks = await res.json();
  }
}
