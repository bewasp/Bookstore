import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BookModel} from '../../models/book.model';
import {UserAccessService} from '../auth/user-access.service';
import {BooksModel} from '../../models/books.model';

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

  deleteBook(book: BooksModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: book
    };
    return this.http.delete(this.url + '/' + book.bookId + '/delete', options);
  }
}
