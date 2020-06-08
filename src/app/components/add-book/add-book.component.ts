import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookModel} from '../../models/book.model';
import {BookService} from '../../services/book-service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: BookModel = new BookModel();
  bookForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private service: BookService) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'picture': [this.book.picture, [
        Validators.required
      ]],
      'title': [this.book.title, [
        Validators.required,
      ]],
      'description': [this.book.description, [
        Validators.required,
      ]],
      'type': [this.book.type, [
        Validators.required,
      ]],
      'price': [this.book.price, [
        Validators.required,
      ]],
      'number': [this.book.number, [
        Validators.required,
      ]]
    });
  }

  onBookSubmit() {
    this.service.addBook(this.book).subscribe();
    alert('Book added');
  }
}
