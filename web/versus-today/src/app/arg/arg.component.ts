import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-arg',
  templateUrl: './arg.component.html',
  styleUrls: ['./arg.component.css']
})
export class ArgComponent implements OnInit {
  public value = 253;
  @Input() urlSrc;
  constructor() { }

  ngOnInit() {
  }

  public like(){
    this.value++;
  }
  public dislike(){
    this.value--;
  }
}
