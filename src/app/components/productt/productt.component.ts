import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Product } from 'src/app/models/productt';


@Component({
  selector: 'app-productt',
  templateUrl: './productt.component.html',
  styleUrls: ['./productt.component.css']
})
export class ProducttComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  @Input() data!: Product;

  // @Input({ required: true }) title!: string;
  // @Input({ transform : (value:string)=> parseInt(value) }) title!: number;
  @Input({ alias: 't' }) title!: string;

  @Output() d = new EventEmitter();

  deleteChild() {
    this.d.emit(this.data.id);
  }
}
