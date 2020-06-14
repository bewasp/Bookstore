import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClientBook} from '../../models/client-book.model';
import {UserAccessService} from '../auth/user-access.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://127.0.0.1:8080/api/cart';

  constructor(private http: HttpClient, private access: UserAccessService) {
  }

  addToCart(clientBook: ClientBook) {
    return this.http.post(this.url + '/add', clientBook);
  }

  getCartBooks() {
    return this.http.get(this.url + '/cart-books/' + this.access.currentUser.userId);
  }

  deleteBook(clientBook: ClientBook) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: clientBook
    };
    return this.http.delete(this.url + '/delete', options);
  }

  deleteAllBooks() {
    return this.http.delete(this.url + '/clear/' + this.access.currentUser.userId);
  }
}
