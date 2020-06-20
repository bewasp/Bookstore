import {Component, Input, OnInit} from '@angular/core';
import {BooksModel} from '../../models/books.model';
import {BookService} from '../../services/book-service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent implements OnInit {

  @Input() book_id: number;
  @Input() title: string;
  @Input() type: string;
  @Input() price: number;


  public books: BooksModel;

  constructor(private service: BookService, private router: Router) {

  }

  ngOnInit() {
    this.books = new BooksModel;
    this.books.bookId = this.book_id;
    this.books.title = this.title;
    this.books.type = this.type;
    this.books.price = this.price;
  }

  deleteBook() {
    this.service.deleteBook(this.books).subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/admin-page']);
    });
    alert('book deleted');
  }
}
