import {Component, OnInit} from '@angular/core';
import {BooksModel} from '../../models/books.model';
import {BookService} from '../../services/book-service/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: BooksModel[];

  constructor(private service: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.service.getAllBooks().subscribe((response: BooksModel[]) => {
      this.books = response;
      console.log(response);
    });
  }
}
