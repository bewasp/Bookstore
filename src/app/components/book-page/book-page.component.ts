import {Component, OnInit} from '@angular/core';
import {BooksModel} from '../../models/books.model';
import {BookService} from '../../services/book-service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  public books: BooksModel;

  constructor(private service: BookService, private route: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    let bookId: string;
    this.route.paramMap
      .subscribe(params => {
        bookId = params.get('bookId');
      });
    this.getBook(bookId);
  }

  getBook(bookId) {
    this.service.getBook(bookId).subscribe((response: BooksModel) => {
      this.books = response;
      console.log(response);
    });
  }

  backPage() {
    this._location.back();
  }
}
