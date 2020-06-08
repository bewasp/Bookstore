import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ShoppingcartComponent} from './components/shoppingcart/shoppingcart.component';
import {BooksComponent} from './components/books/books.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {BookPageComponent} from './components/book-page/book-page.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'cart',
  component: ShoppingcartComponent
}, {
  path: 'books',
  component: BooksComponent
}, {
  path: 'add-book',
  component: AddBookComponent
}, {
  path: 'book-page/:bookId',
  component: BookPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
