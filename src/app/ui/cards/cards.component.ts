import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { NgOptimizedImage } from '@angular/common';

 
 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:"",
    category: ""
  };
@Output() myEvent=new EventEmitter<number>()
emitEvent(){
  this.myEvent.emit(this.product.id)
}


}

