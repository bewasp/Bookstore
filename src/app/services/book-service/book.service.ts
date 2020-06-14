import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://127.0.0.1:8080/api/books';

  constructor(private http: HttpClient) { }

  addBook(bookModel: BookModel) {
    return this.http.post(this.url + '/create', bookModel);
  }

  getAllBooks() {
    return this.http.get(this.url + '/all-books');
  }

  getBook(bookId) {
    return this.http.get(this.url + '/' + bookId);
  }
}
