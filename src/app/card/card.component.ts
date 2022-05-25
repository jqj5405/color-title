import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardNum: number;
  @Input() color: string;
  @Output() selectColor = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.selectColor.emit(this.color);
  }
}
