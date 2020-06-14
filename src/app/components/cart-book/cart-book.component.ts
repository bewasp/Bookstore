import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {UserAccessService} from '../../services/auth/user-access.service';
import {ClientBook} from '../../models/client-book.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-book',
  templateUrl: './cart-book.component.html',
  styleUrls: ['./cart-book.component.css']
})
export class CartBookComponent implements OnInit {

  @Input() book_id: number;
  @Input() picture: any;
  @Input() title: string;
  @Input() price: number;

  clientBook: ClientBook;

  constructor(private service: CartService, private access: UserAccessService, private router: Router) { }

  ngOnInit() {
    this.clientBook = new ClientBook();
    this.clientBook.userId = this.access.currentUser.userId;
    this.clientBook.bookId = this.book_id;
  }

  deleteBook() {
    this.service.deleteBook(this.clientBook).subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/cart']);
    });
  }
}
