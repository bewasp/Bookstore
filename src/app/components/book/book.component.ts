import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }


}
