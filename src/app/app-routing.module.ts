import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ShoppingcartComponent} from './components/shoppingcart/shoppingcart.component';
import {BooksComponent} from './components/books/books.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {BookPageComponent} from './components/book-page/book-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {AdminPageComponent} from './components/admin-page/admin-page.component';

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
}, {
  path: 'user-page',
  component: UserPageComponent
}, {
  path: 'user-info/:type',
  component: UserInfoComponent
}, {
  path: 'admin-page',
  component: AdminPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
