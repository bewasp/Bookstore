import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { BooksComponent } from './components/books/books.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {CartBookComponent} from './components/cart-book/cart-book.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminBookComponent } from './components/admin-book/admin-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ShoppingcartComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    BookPageComponent,
    SummaryPipe,
    CartBookComponent,
    UserPageComponent,
    UserInfoComponent,
    AdminPageComponent,
    AdminBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
