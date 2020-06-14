import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart-service/cart.service';
import {BooksModel} from '../../models/books.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  books: BooksModel[];

  constructor(private service: CartService) { }

  ngOnInit() {
    this.getCartBooks();
  }

  getCartBooks() {
    this.service.getCartBooks().subscribe((response: BooksModel[]) => {
      this.books = response;
    });
  }
}
