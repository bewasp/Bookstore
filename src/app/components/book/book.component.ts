import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {ClientBook} from '../../models/client-book.model';
import {UserAccessService} from '../../services/auth/user-access.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book_id: number;
  @Input() picture: any;
  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() price: number;
  @Input() number: number;

  clientBook: ClientBook;

  constructor(private service: CartService, private access: UserAccessService) { }

  ngOnInit() {
    this.clientBook = new ClientBook();
    this.clientBook.userId = this.access.currentUser.userId;
    this.clientBook.bookId = this.book_id;
    this.clientBook.booksNumber = 1;
  }

  addToCart() {
    this.service.addToCart(this.clientBook).subscribe();
    alert('Book added to shopping cart');
  }
}
