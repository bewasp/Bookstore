import { Component, OnInit } from '@angular/core';
import {BooksModel} from '../../models/books.model';
import {BookService} from '../../services/book-service/book.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

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
