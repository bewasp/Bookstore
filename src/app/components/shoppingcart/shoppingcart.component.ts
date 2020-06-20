import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {BooksModel} from '../../models/books.model';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order-service/order.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  books: BooksModel[];

  constructor(private service: CartService,
              private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
    this.getCartBooks();
  }

  getCartBooks() {
    this.service.getCartBooks().subscribe((response: BooksModel[]) => {
      this.books = response;
    });
  }

  deleteAllBooks() {
    this.service.deleteAllBooks().subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/cart']);
    });
  }

  completeOrder() {
    this.orderService.completeOrder().subscribe(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/cart']);
    });
    alert('Order completed');
  }
}
