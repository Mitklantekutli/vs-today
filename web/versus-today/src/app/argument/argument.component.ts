import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.css']
})
export class ArgumentComponent implements OnInit {
  counter = 10;
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
